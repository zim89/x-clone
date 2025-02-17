import { auth } from '@clerk/nextjs/server'
import { prisma } from '@/shared/lib'
import { FeedInfinite } from './feed-infinite'
import { Post } from './post'

export const Feed = async ({ userProfileId }: { userProfileId?: string }) => {
  const { userId } = await auth()

  if (!userId) return

  const whereCondition = userProfileId
    ? { parentPostId: null, userId: userProfileId }
    : {
        parentPostId: null,
        userId: {
          in: [
            userId,
            ...(
              await prisma.follow.findMany({
                where: { followerId: userId },
                select: { followingId: true },
              })
            ).map(follow => follow.followingId),
          ],
        },
      }

  const postIncludeQuery = {
    user: { select: { displayName: true, username: true, img: true } },
    _count: { select: { likes: true, rePosts: true, comments: true } },
    likes: { where: { userId: userId }, select: { id: true } },
    rePosts: { where: { userId: userId }, select: { id: true } },
    saves: { where: { userId: userId }, select: { id: true } },
  }

  const posts = await prisma.post.findMany({
    where: whereCondition,
    include: {
      rePost: {
        include: postIncludeQuery,
      },
      ...postIncludeQuery,
    },
    take: 3,
    skip: 0,
    orderBy: { createdAt: 'desc' },
  })
  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <Post post={post} />
        </div>
      ))}

      <FeedInfinite userProfileId={userProfileId} />
    </div>
  )
}

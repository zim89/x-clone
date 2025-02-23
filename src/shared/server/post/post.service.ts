import { prisma } from '@/shared/lib'

class PostService {
  private LIMIT = 3

  async getPosts(page = 1) {
    const whereCondition = { parentPostId: null }

    const posts = await prisma.post.findMany({
      where: whereCondition,
      take: this.LIMIT,
      skip: (page - 1) * this.LIMIT,
      orderBy: { createdAt: 'desc' },
    })

    const totalPosts = await prisma.post.count({ where: whereCondition })
    const hasMore = Number(page) * this.LIMIT < totalPosts
    const response = { data: posts, hasMore }
    return response
  }
}

export const postService = new PostService()

import { NextResponse } from 'next/server'
import { postService } from './post.service'

class PostController {
  async getPosts(req: Request) {
    const searchParams = new URL(req.url).searchParams
    const cursor = searchParams.get('cursor')
    const page = cursor ? parseInt(cursor) : undefined

    try {
      const response = await postService.getPosts(page)
      return NextResponse.json(response)
    } catch (error) {
      return NextResponse.json(
        { message: 'Error fetching posts', error },
        { status: 500 },
      )
    }
  }

  // async getPostsByUserId(req: Request) {
  // const { userId } = await auth()
  // console.log('[##userId]: ', userId)
  // if (!userId) {
  //   return
  //   return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  // }
  // const searchParams = new URL(req.url).searchParams
  // const userProfileId = searchParams.get('user')
  // const cursor = searchParams.get('cursor')
  // const page = cursor ? parseInt(cursor) : undefined
  // try {
  //   const response = await postService.getPosts({
  //     userId,
  //     userProfileId,
  //     page,
  //   })
  //   return NextResponse.json(response)
  // } catch (error) {
  //   return NextResponse.json(
  //     { message: 'Error fetching posts', error },
  //     { status: 500 },
  //   )
  // }
  // }
}

export const postController = new PostController()

import { postController } from '@/shared/server/post'

export async function GET(req: Request) {
  return postController.getPosts(req)
}

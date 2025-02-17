'use server'
export const fetchPosts = async (pageParam: number, userProfileId?: string) => {
  const response = await fetch(
    'http://localhost:3000/api/posts?cursor=' +
      pageParam +
      '&user=' +
      userProfileId,
    {
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 0 },
    },
  )
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  const data = await response.json()
  return data
}

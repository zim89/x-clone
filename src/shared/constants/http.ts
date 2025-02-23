export const HttpHeaderEnum = {
  Authorization: 'Authorization',
  ContentType: 'Content-Type',
} as const

export const ContentTypeEnum = {
  Json: 'application/json',
  FormData: 'multipart/form-data',
  Text: 'text/plain',
} as const

export const HttpMethodEnum = {
  Get: 'GET',
  Post: 'POST',
  Put: 'PUT',
  Patch: 'PATCH',
  Delete: 'DELETE',
} as const

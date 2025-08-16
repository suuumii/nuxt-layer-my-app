import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('/books', () => {
    return HttpResponse.json([
      { id: 1, title: 'client-base Book 1', author: 'Author 1' },
      { id: 2, title: 'client-base Book 2', author: 'Author 2' },
      { id: 3, title: 'client-base Book 3', author: 'Author 3' },
    ])
  }),
]

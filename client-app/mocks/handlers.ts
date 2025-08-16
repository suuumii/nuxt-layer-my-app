import { http, HttpResponse } from 'msw'
import { handlers as baseHandlers } from 'client-base/mocks/handlers'

const appHandlers = [
  http.get('/tasks', () => {
    return HttpResponse.json([
      { id: 1, name: 'client-app Task 1', status: 'pending' },
      { id: 2, name: 'client-app Task 2', status: 'completed' },
      { id: 3, name: 'client-app Task 3', status: 'in_progress' },
    ])
  }),
]

export const handlers = [...baseHandlers, ...appHandlers]

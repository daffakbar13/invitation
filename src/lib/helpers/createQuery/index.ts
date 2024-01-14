/* eslint-disable function-paren-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable space-before-function-paren */
import { useQuery } from 'react-query'
import { UseQueryOptions } from 'react-query/types/react/types'

export default function createQuery<T extends (...args: any) => Promise<any>>(
  fn: T,
  options?: UseQueryOptions<any>,
) {
  return (...args: Parameters<T>) =>
    useQuery<Awaited<ReturnType<T>>>({
      ...options,
      queryKey: [fn.name, ...args],
      queryFn: () => fn(...args),
    })
}

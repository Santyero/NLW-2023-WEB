import { User } from '@/interfaces/User'
import decode from 'jwt-decode'
import { cookies } from 'next/headers'

export function getUser(): User {
  const token = cookies().get('token')?.value

  if (!token) {
    throw new Error('Missing token')
  }

  return decode(token) as User
}

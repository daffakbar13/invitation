import { NextResponse } from 'next/server'

import UsersModel from '@/server/models/users'

export async function GET() {
  const Users = await UsersModel()
  const data = await Users.findOne({ role: 'cpp' })

  return new NextResponse(JSON.stringify({ data }), {
    status: 200,
  })
}

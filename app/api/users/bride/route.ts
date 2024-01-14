import { NextResponse } from 'next/server'

import UsersModel from '@/server/models/users'

export async function GET() {
  const Users = await UsersModel()
  const cpp = await Users.findOne({ role: 'cpp' })
  const cpw = await Users.findOne({ role: 'cpw' })

  return new NextResponse(JSON.stringify({ data: { cpp, cpw } }), {
    status: 200,
  })
}

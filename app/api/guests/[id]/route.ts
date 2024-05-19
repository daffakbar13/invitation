import { ObjectId } from 'mongodb'
import { NextRequest, NextResponse } from 'next/server'

import GuestsModel from '@/server/models/guests'

type Params = { params: { id: string } }

export async function GET(_: NextRequest, { params }: Params) {
  const guestId = new ObjectId(params.id)
  const guests = await GuestsModel()
  const data = await guests.findOneAndUpdate({ _id: guestId }, { $inc: { seen: 1 } })

  return new NextResponse(JSON.stringify({ data }), { status: 200 })
}

export async function PUT(req: Request, { params }: Params) {
  const guestId = new ObjectId(params.id)
  const body = await req.json()
  const guests = await GuestsModel()

  await guests.updateOne({ _id: guestId }, { $set: body })

  return NextResponse.json({ status: 204 })
}

export async function DELETE(_: Request, { params }: Params) {
  const guestId = new ObjectId(params.id)
  const guests = await GuestsModel()

  await guests.deleteOne({ _id: guestId })

  return NextResponse.json({ status: 204 })
}

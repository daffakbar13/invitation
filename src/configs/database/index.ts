import { MongoClient } from 'mongodb'

export default async function database() {
  const client = new MongoClient(String(process.env.NEXT_PUBLIC_MONGODB_URL))

  await client.connect()

  return client.db('invitation')
}

import { MongoClient } from 'mongodb'

export default async function database() {
  const url = 'mongodb+srv://daffaraihan03:daffakbar354@daffa.loofr2k.mongodb.net/'
  const client = new MongoClient(url)

  await client.connect()

  return client.db('invitation')
}

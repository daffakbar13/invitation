import { NextResponse } from 'next/server'

export async function GET() {
  return new NextResponse(
    JSON.stringify({
      data: {
        cpp: {
          short_name: 'Daffa',
          child_order: 3,
          father: {
            name: 'Mahna',
            is_alm: false,
          },
          role: 'cpp',
          full_name: 'Muhammad Daffa Raihan Akbar',
          gender: 'male',
          mother: {
            name: 'Tien Kartini P.',
            is_alm: false,
          },
        },
        cpw: {
          short_name: 'Alvina',
          child_order: 1,
          father: {
            name: 'Dadi Supriadi',
            is_alm: true,
          },
          role: 'cpw',
          full_name: 'Alvina Damayanti',
          gender: 'female',
          mother: {
            name: 'Jeuminah',
            is_alm: false,
          },
        },
      },
    }),
    {
      status: 200,
    },
  )
}

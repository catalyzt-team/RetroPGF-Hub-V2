import { RetroRound3 } from '@/app/(white_navbar)/explore/RetroPGF3/RetroType3'
import { RetroRound2 } from '@/app/(white_navbar)/explore/RetroPGF2/RetroType2'
import { RetroRound1 } from '@/app/(white_navbar)/explore/RetroPGF1/RetroType1'
import { iRetroPGF4Project } from '@/app/(white_navbar)/explore/RetroPGF4/RetroType4'
import { getJsonRound1 } from '@/app/(white_navbar)/explore/RetroPGF1/page'
import { getJsonRound2 } from '@/app/(white_navbar)/explore/RetroPGF2/page'
import { getJsonRound3 } from '@/app/(white_navbar)/explore/RetroPGF3/page'
import { getJsonRound4 } from '@/app/(white_navbar)/explore/RetroPGF4/page'
//import { getJsonRound5 } from '@/app/(white_navbar)/explore/RetroPGF5/page'
import Cpage from './Cpage'
import { Metadata } from 'next'
import { shuffle } from '@/app/lib/utils'
import { iRetroPGF5Project } from '@/app/(white_navbar)/explore/RetroPGF5/RetroType5'
import { getRealTimeRetroPGF5 } from '@/app/lib/realtime'

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: 'Explore | RetroPGF Hub',
  description:
    'Community-driven platform for project creators to submit their project ideas and get feedback.',
  openGraph: {
    type: 'website',
    url: 'https://retropgfhub.com',
    title: 'Explore | RetroPGF Hub',
    description:
      'Community-driven platform for project creators to submit their project ideas and get feedback.',
    siteName: 'retropgfhub.com',
    images: [
      {
        url: 'https://retropgfhub.com/cover-explore.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://retropgfhub.com',
    creator: 'Catalyzt.tech',
    images: ['https://retropgfhub.com/cover-explore.png'],
  },
}

export async function getAllRound(limit: number): Promise<{
  round1: RetroRound1[]
  round2: RetroRound2[]
  round3: RetroRound3[]
  round4: iRetroPGF4Project[]
  round5: iRetroPGF5Project[]

  cateRound5: Map<string, number>
  cateRound4: Map<string, number>
  cateRound3: Map<string, number>
  cateRound2: Map<string, number>
}> {
  const round1 = (await getJsonRound1()).sort((a: any, b: any) => {
    return b.allocation - a.allocation
  })

  const round2 = await getJsonRound2()
  const round3 = await getJsonRound3()
  const round4 = await getJsonRound4()
  const round5Raw = await getRealTimeRetroPGF5()
  
  const cateRound2Counter = new Map<string, number>()
  const cateRound3Counter = new Map<string, number>()
  const cateRound4Counter = new Map<string, number>()
  const cateRound5Counter = new Map<string, number>()

  
  round2.forEach((project: RetroRound2) => {
    const cateRound2 = project.Category
    if (cateRound2) {
      if (cateRound2Counter.has(cateRound2)) {
        cateRound2Counter.set(
          cateRound2,
          cateRound2Counter.get(cateRound2)! + 1
        )
      } else {
        cateRound2Counter.set(cateRound2, 1)
      }
    }
  })

  round3.forEach((project: RetroRound3) => {
    const cateRound3 = project['New Main-Category']
    if (cateRound3) {
      if (cateRound3Counter.has(cateRound3)) {
        cateRound3Counter.set(
          cateRound3,
          cateRound3Counter.get(cateRound3)! + 1
        )
      } else {
        cateRound3Counter.set(cateRound3, 1)
      }
    }
  })
  
  round4.forEach((project: iRetroPGF4Project) => {
    const cateRound4 = project.category
    if (cateRound4) {
      if (cateRound4Counter.has(cateRound4)) {
        cateRound4Counter.set(
          cateRound4,
          cateRound4Counter.get(cateRound4)! + 1
        )
      } else {
        cateRound4Counter.set(cateRound4, 1)
      }
    }
  })
  
  const filterUniqueRound5 = round5Raw.data.filter((item, index, self) => {
    return index === self.findIndex((x) => x.name === item.name)
  })

  filterUniqueRound5.forEach((project: iRetroPGF5Project) => {
      const cateRound5 = project.category
      if (cateRound5) {
        if (cateRound5Counter.has(cateRound5)) {
          cateRound5Counter.set(
            cateRound5,
            cateRound5Counter.get(cateRound5)! + 1
          )
        } else {
          cateRound5Counter.set(cateRound5, 1)
        }
      }
    })

  const shuffledRound1 = shuffle([...round1])
  const shuffledRound2 = shuffle([...round2])
  const shuffledRound3 = shuffle([...round3])
  const shuffledRound4 = shuffle([...round4])
  // const shuffledRound5 = shuffle([...round5])

  return {
    round1: shuffledRound1.slice(0, limit),
    round2: shuffledRound2.slice(0, limit),
    round3: shuffledRound3.slice(0, limit),
    round4: shuffledRound4.slice(0, limit),
    round5: filterUniqueRound5,

    cateRound5: cateRound5Counter,
    cateRound4: cateRound4Counter,
    cateRound3: cateRound3Counter,
    cateRound2: cateRound2Counter,

  }
}

export default async function page({}: {}) {
  try {
    const { round1, round2, round3, round4, round5, cateRound2, cateRound3, cateRound4, cateRound5 } =
      await getAllRound(20)

    return (
      <Cpage
        cateRound2={cateRound2}
        cateRound3={cateRound3}
        cateRound4={cateRound4}
        cateRound5={cateRound5}
        round1={round1}
        round2={round2}
        round3={round3}
        round4={round4}
        round5={round5}
      />
    )
  } catch (error) {
    console.error('Error fetching data:', error)
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Error</h1>
          <p className="text-red-500">
            {error instanceof Error ? error.message : 'An unexpected error occurred'}
          </p>
        </div>
      </div>
    )
  }
}

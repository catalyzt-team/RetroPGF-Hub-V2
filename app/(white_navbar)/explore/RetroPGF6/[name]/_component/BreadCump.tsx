import ChevronRight from '@carbon/icons-react/lib/ChevronRight'
import Link from 'next/link'

export default function BreadCump({ projectName }: { projectName: string }) {
  return (
    <div className="flex flex-wrap gap-2 p-2 md:p-0">
      <Link
        href={'/explore'}
        className="text-xs font-normal text-gray-800 hover:text-red-500 hover:underline"
      >
        Explore
      </Link>

      <ChevronRight size={16} />

      <Link
        href={'/explore/RetroPGF5'}
        className="text-xs font-normal text-gray-500 hover:underline hover:text-red-500"
      >
        RetroPGF 5
      </Link>

      <ChevronRight size={16} />

      <p className="text-xs font-normal text-gray-500">{projectName}</p>
    </div>
  )
}

import { convertMarkdownToHtml, splitTextNewLine } from '@/app/lib/common'
import { iRetroPGF6Project } from '../../../RetroType6'
import { EASProjectMetadata } from '@/app/types/realtime-api-agora'

interface iImpactStatementSection {
  data: iRetroPGF6Project
  impactSectionRef: React.MutableRefObject<HTMLElement | null>
}
export default function ImpactStatementSection({
  data,
  impactSectionRef,
}: iImpactStatementSection) {
  return (
    <section
      id="Impact Statement"
      ref={impactSectionRef}
      className="flex flex-col gap-6 bg-white rounded-lg p-4 lg:p-6 border"
    >
      <h3 className="text-2xl font-semibold">Impact Statement</h3>
      <hr className="hidden sm:block border-t-gray-100" />
      {Array.isArray(data.impactIpfs.impactStatement) &&
        data.impactIpfs.impactStatement.length === 0 && (
          <p className="text-base font-normal text-gray-600">
            There is no impact for this project.
          </p>
        )}
      {/* Don't delete this, this is experiment rendering markdown or split with \n */}
      {/* {data.impactIpfs.impactStatement.length !== 0 &&
        data.impactIpfs.impactStatement.map((item, i) => (
          <div
            key={i}
            className="flex flex-col gap-1 bg-slate-50 rounded-lg px-6 py-4 min-w-72"
          >
            <p className="text-lg font-semibold font-rubik mb-1">
              {item.question}
            </p>
            <div>
              {item.answer && (
                <p className="text-sm text-gray-500">
                  {splitTextNewLine(item.answer)}
                </p>
              )}
            </div>
          </div>
        ))} */}
      {Array.isArray(data.impactIpfs.impactStatement) &&
        data.impactIpfs.impactStatement?.length !== 0 &&
        data.impactIpfs.impactStatement?.map((item: any, i: number) => (
          <div key={i} className="flex flex-col gap-y-4">
            <div className="text-lg break-words font-semibold text-gray-800">
              {item.question}
            </div>
            <div>
              {item.answer && (
                <a
                  className="text-base break-words font-normal text-gray-600 space-y-5"
                  dangerouslySetInnerHTML={{
                    __html: convertMarkdownToHtml(item.answer),
                  }}
                ></a>
              )}
            </div>
          </div>
        ))}
    </section>
  )
}

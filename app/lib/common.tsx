import { CategoryRound2 } from '../(white_navbar)/explore/RetroPGF2/RetroType2'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import DOMPurify from 'dompurify'

export function convertMarkdownToHtml(markdown: string) {
  const filterHrMarkdown: string = markdown.replace(/---/g, '\n')
  const htmlFormat: string = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .processSync(filterHrMarkdown)
    .toString()
  const cleanHtml = DOMPurify.sanitize(htmlFormat)
  return cleanHtml
}
export function splitTextNewLine(text: string) {
  return text.split('\n').map((paragraph, i) => (
    <p
      key={i}
      className={`flex flex-wrap text-base font-normal text-gray-600 break-words break-all ${
        i != text.split('\n').length - 1 ? 'mb-3' : ''
      }`}
      // style={{ wordBreak: 'break-all' }}
    >
      {paragraph}
    </p>
  ))
}
export function handleOpenSource(isOpenSource: boolean) {
  if (isOpenSource) {
    return (
      <div className="px-2 py-1 bg-green-50 rounded-full w-fit">
        <p className="text-green-700 text-xs font-medium line-clamp-1 break-words">
          Open Source
        </p>
      </div>
    )
  }
  if (!isOpenSource) {
    return (
      <div className="px-2 py-1 bg-red-50 rounded-full w-fit">
        <p className="text-red-700 text-xs font-medium line-clamp-1 break-words">
          Closed Source
        </p>
      </div>
    )
  }
}

export function handleApplicationCategoryRound5(
  category: string,
  textSize: string
) {
  if (category === 'ETHEREUM_CORE_CONTRIBUTIONS') {
    return (
      <div className="px-2 py-1 bg-yellow-50 rounded-full w-fit">
        <p
          className={`text-yellow-700 ${textSize} font-medium line-clamp-1 break-words`}
        >
          Ethereum Core Contributions
        </p>
      </div>
    )
  } else if (category === 'OP_STACK_RESEARCH_AND_DEVELOPMENT') {
    return (
      <div className="px-2 py-1 bg-orange-50 rounded-full w-fit">
        <p
          className={`text-orange-600 ${textSize} font-medium line-clamp-1 break-words`}
        >
          OP Stack Research and Development
        </p>
      </div>
    )
  } else if (category === 'OP_STACK_TOOLING') {
    return (
      <div className="px-2 py-1 bg-sky-50 rounded-full w-fit">
        <p
          className={`text-sky-600 ${textSize} font-medium line-clamp-1 break-words`}
        >
          OP Stack Tooling
        </p>
      </div>
    )
  }
}

export function handleApplicationCategoryRound6(
  category: string,
  textSize: string
) {
  if (category === 'GOVERNANCE_LEADERSHIP') {
    return (
      <div className="px-2 py-1 bg-yellow-50 rounded-full w-fit">
        <p
          className={`text-yellow-700 ${textSize} font-medium line-clamp-1 break-words`}
        >
          Governance Leadership
        </p>
      </div>
    )
  } else if (category === 'GOVERNANCE_INFRA_AND_TOOLING') {
    return (
      <div className="px-2 py-1 bg-orange-50 rounded-full w-fit">
        <p
          className={`text-orange-600 ${textSize} font-medium line-clamp-1 break-words`}
        >
          Governance Infra & Tooling
        </p>
      </div>
    )
  } else if (category === 'GOVERNANCE_ANALYTICS') {
    return (
      <div className="px-2 py-1 bg-sky-50 rounded-full w-fit">
        <p
          className={`text-sky-600 ${textSize} font-medium line-clamp-1 break-words`}
        >
          Governance Analytics
        </p>
      </div>
    )
  }
}
export function handleProjectCategoryRound(category: string, textSize: string) {
  if (category === 'CeFi') {
    return (
      <div className="px-2 py-1 bg-yellow-50 rounded-full w-fit">
        <p
          className={`text-yellow-700 ${textSize} font-medium line-clamp-1 break-words`}
        >
          {category}
        </p>
      </div>
    )
  } else if (category === 'DeFi') {
    return (
      <div className="px-2 py-1 bg-orange-50 rounded-full w-fit">
        <p
          className={`text-orange-600 ${textSize} font-medium line-clamp-1 break-words`}
        >
          {category}
        </p>
      </div>
    )
  } else if (category === 'NFT') {
    return (
      <div className="px-2 py-1 bg-sky-50 rounded-full w-fit">
        <p
          className={`text-sky-600 ${textSize} font-medium line-clamp-1 break-words`}
        >
          {category}
        </p>
      </div>
    )
  } else if (category === 'Social') {
    return (
      <div className="px-2 py-1 bg-emerald-50 rounded-full w-fit">
        <p
          className={`text-emerald-600 ${textSize} font-medium line-clamp-1 break-words`}
        >
          {category}
        </p>
      </div>
    )
  } else if (category === 'Utility') {
    return (
      <div className="px-2 py-1 bg-pink-50 rounded-full w-fit">
        <p
          className={`text-pink-600 ${textSize} font-medium line-clamp-1 break-words`}
        >
          {category}
        </p>
      </div>
    )
  } else if (category === 'Cross Chain') {
    return (
      <div className="px-2 py-1 bg-lime-50 rounded-full w-fit">
        <p
          className={`text-lime-600 ${textSize} font-medium line-clamp-1 break-words`}
        >
          {category}
        </p>
      </div>
    )
  } else if (category === 'Governance') {
    return (
      <div className="px-2 py-1 bg-indigo-50 rounded-full w-fit">
        <p
          className={`text-indigo-600 ${textSize} font-medium line-clamp-1 break-words`}
        >
          {category}
        </p>
      </div>
    )
  }
}
export function handleCategoryRound4(category: string) {
  if (category === 'CeFi') {
    return (
      <div className="px-2 py-1 bg-yellow-50 rounded-full w-fit">
        <p className="text-yellow-700 text-xs font-medium line-clamp-1 break-words">
          {category}
        </p>
      </div>
    )
  } else if (category === 'DeFi') {
    return (
      <div className="px-2 py-1 bg-orange-50 rounded-full w-fit">
        <p className="text-orange-600 text-xs font-medium line-clamp-1 break-words">
          {category}
        </p>
      </div>
    )
  } else if (category === 'NFT') {
    return (
      <div className="px-2 py-1 bg-sky-50 rounded-full w-fit">
        <p className="text-sky-600 text-xs font-medium line-clamp-1 break-words">
          {category}
        </p>
      </div>
    )
  } else if (category === 'Social') {
    return (
      <div className="px-2 py-1 bg-emerald-50 rounded-full w-fit">
        <p className="text-emerald-600 text-xs font-medium line-clamp-1 break-words">
          {category}
        </p>
      </div>
    )
  } else if (category === 'Utility') {
    return (
      <div className="px-2 py-1 bg-pink-50 rounded-full w-fit">
        <p className="text-pink-600 text-xs font-medium line-clamp-1 break-words">
          {category}
        </p>
      </div>
    )
  } else if (category === 'Cross Chain') {
    return (
      <div className="px-2 py-1 bg-lime-50 rounded-full w-fit">
        <p className="text-lime-600 text-xs font-medium line-clamp-1 break-words">
          {category}
        </p>
      </div>
    )
  } else if (category === 'Governance') {
    return (
      <div className="px-2 py-1 bg-indigo-50 rounded-full w-fit">
        <p className="text-indigo-600 text-xs font-medium line-clamp-1 break-words">
          {category}
        </p>
      </div>
    )
  }
}
export function handleCategoryRound3(category: string) {
  if (category === 'OP Stack') {
    return (
      <div className="px-2 py-1 bg-yellow-50 rounded-full w-fit">
        <p className="text-yellow-700 text-xs font-medium line-clamp-1 break-words">
          {category}
        </p>
      </div>
    )
  } else if (category === 'Collective Governance') {
    return (
      <div className="px-2 py-1 bg-orange-50 rounded-full w-fit">
        <p className="text-orange-600 text-xs font-medium line-clamp-1 break-words">
          {category}
        </p>
      </div>
    )
  } else if (category === 'Developer Ecosystem') {
    return (
      <div className="px-2 py-1 bg-sky-50 rounded-full w-fit">
        <p className="text-sky-600 text-xs font-medium line-clamp-1 break-words">
          {category}
        </p>
      </div>
    )
  } else if (category === 'End User Experience Adoption') {
    return (
      <div className="px-2 py-1 bg-emerald-50 rounded-full w-fit">
        <p className="text-emerald-600 text-xs font-medium line-clamp-1 break-words">
          {category}
        </p>
      </div>
    )
  } else {
    return (
      <div className="px-2 py-1 bg-indigo-50 rounded-full w-fit">
        <p className="text-indigo-600 text-xs font-medium line-clamp-1 break-words">
          {category}
        </p>
      </div>
    )
  }
}

export function handleCategoryRound2(category: CategoryRound2) {
  if (category === 'Education') {
    return (
      <div className="px-2 py-1 bg-yellow-50 rounded-full w-fit">
        <p className="text-yellow-700 text-xs font-medium line-clamp-1 break-words">
          {category}
        </p>
      </div>
    )
  } else if (category === 'Infrastructure') {
    return (
      <div className="px-2 py-1 bg-orange-50 rounded-full w-fit">
        <p className="text-orange-600 text-xs font-medium line-clamp-1 break-words">
          {category}
        </p>
      </div>
    )
  } else if (category === 'Tooling and utilities') {
    return (
      <div className="px-2 py-1 bg-emerald-50 rounded-full w-fit">
        <p className="text-emerald-600 text-xs font-medium line-clamp-1 break-words">
          {category}
        </p>
      </div>
    )
  } else {
    return (
      <div className="px-2 py-1 bg-indigo-50 rounded-full w-fit">
        <p className="text-indigo-600 text-xs font-medium line-clamp-1 break-words">
          {category}
        </p>
      </div>
    )
  }
}

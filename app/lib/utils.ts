export function ConvertStringToTime(time: string) {
  const date = new Date(time)
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export function shuffle(array: any[]) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

export function numberWithCommas(x: string | number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export function convertImageClodinary(
  url: string,
  width: number,
  height: number
) {
  if (url) {
    const publicId = url.split('/').pop()?.split('.')[0]

    if (publicId) {
      let targetBanner = `http://res.cloudinary.com/dxoowohf8/image/upload/w_${width},h_${height},c_scale/v1713108616/retropgf3/${publicId}.png`
      return targetBanner
    }
    return ''
  } else {
    return ''
  }
}

export function isLetter(c: string) {
  return c.toLowerCase() !== c.toUpperCase()
}

export function cleanParamsName(name: string) {
  const cleanName = name.replace(/ /g, '-').replace(/[^a-zA-Z0-9-]/g, '')
  return cleanName
}

export function mapChainId(chainId: number) {
  switch (chainId) {
    case 10:
      return 'optimism'
    case 252:
      return 'fraxtal'
    case 1750:
      return 'metal'
    case 8453:
      return 'base'
    case 34443:
      return 'mode'
    case 7777777:
      return 'zora'
    default:
      return 'Unknown'
  }
}

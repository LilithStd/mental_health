const normalize = (str: string) =>
  str
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, ' ') // убрать мусор типа - : T Z .
    .replace(/\s+/g, ' ')
    .trim()

export const searchElementsInArray = <T>(
  array: T[],
  request: string,
  keyExtractors: Array<(item: T) => string | undefined | null>
): T[] => {
  const query = normalize(request)
  if (!query) return array

  const queryWords = query.split(' ')

  return array.filter(item =>
    keyExtractors.some(extractor => {
      const raw = extractor(item)
      if (!raw) return false

      const valueWords = normalize(raw).split(' ')

      return queryWords.every(qw =>
        valueWords.some(vw => vw.startsWith(qw))
      )
    })
  )
}

export const cropContent = (content: string, maxLength: number): string => {
  if (content.length <= maxLength) {
    return content;
  }

  return content.slice(0, maxLength) + '...';
}
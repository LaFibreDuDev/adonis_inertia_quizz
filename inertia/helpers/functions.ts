export function shuffleArray(array: Array<any>) {
  return array
    .map((item) => ({ value: item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((item) => item.value)
}

export function getRelativePath(absoluteUrl: string) {
  try {
    const url = new URL(absoluteUrl)
    return url.pathname + url.search + url.hash
  } catch (error) {
    console.error('URL invalide :', error)
    return null
  }
}

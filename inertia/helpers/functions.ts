export function getRelativePath(absoluteUrl: string) {
  try {
    const url = new URL(absoluteUrl)
    return url.pathname + url.search + url.hash
  } catch (error) {
    console.error('URL invalide :', error)
    return null
  }
}

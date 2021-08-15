export const getImageUrl = (url: string | undefined): string => {
  if (!url) return ''

  if (url.includes('http')) return url

  return `http://localhost:1337${url}`
}

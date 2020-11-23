import parse from 'html-react-parser'

export function addEmbedInUrl(url: string) {
  if (!url) {
    return;
  }

  const EMBED = '.com/embed/'
  const URLPART1 = 0
  const URLPART2 = 1
  const CONFIG = '?autoplay=false&amp;showinfo=true'

  const splitedUrl = url.split('.com/')

  return splitedUrl[URLPART1] + EMBED + splitedUrl[URLPART2] + CONFIG
}

export function parseStringHtml(text: string) {
  if (!text) {
    return;
  }

  return parse(text)
}
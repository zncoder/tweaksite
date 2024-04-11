function haituu() {
  removeElement('#note')
}

function removeElement(selector) {
  let el = document.querySelector(selector)
  console.log(selector, el)
  if (el) {
    el.parentElement.removeChild(el)
  }
}

function archiveph() {
  removeElement('#DIVALREADY')
}

function nytimes() {
  setTimeout(removeElement, 2000, '#gateway-content')
  let href = location.href
  let sfx = '#commentsContainer'
  if (href.indexOf(sfx) < 0) {
    location.href = href + sfx
  }
}

function tweak() {
  let u = new URL(location.href)
  let fn = siteFn[u.host]
  if (fn) {
    fn()
  }
}

var siteFn = {
  'archive.ph': archiveph,
  'www.haituu.tv': haituu,
  'www.nytimes.com': nytimes,
}

tweak()

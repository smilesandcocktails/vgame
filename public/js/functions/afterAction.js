function afterAction (e, nextChapt) {
  e.preventDefault()

  var backToContents = '.contentsPage'
  var url = ''

  // right arrow ==> Go to Next Chapter
  if (e.which === 39) {
    url = $(nextChapt).attr('href')
    nextUrl(url)
  }
  // up key ==> Go to Contents Page
  else if (e.which === 38) {
    url = $(backToContents).attr('href')
    nextUrl(url)
  }
  // esc key ==> Reload Windows
  else if (e.which === 27) {
    pageReload()
  }
}

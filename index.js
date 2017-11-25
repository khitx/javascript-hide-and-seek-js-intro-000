function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  return document.querySelector('#grand-node').querySelectorAll('div')[3]
}

function increaseRankBy(n) {
  document.querySelectorAll('#ranked-list li')
}

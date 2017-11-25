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
  var lis = document.querySelectorAll('.ranked-list li')
  for (var i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString()
  }
}

//const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

//for (let i = 0; i < lis.length; i++) {
  //lis[i].innerHTML = (i + 1).toString()
//}

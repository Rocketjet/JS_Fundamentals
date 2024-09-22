/* function filter_list(l) { // [1,2,'aasf','1','123',123] == [1,2,123]
  return l.filter(e => typeof e !== 'string')
}

function filter_list(l) {
  return l.filter(Number.isInteger);
} */
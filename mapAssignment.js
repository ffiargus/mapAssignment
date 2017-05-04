var words = ["ground", "control", "to", "major", "tom"];

function map(arr, findWordLength){
  var lengthArr = [];
  var i = 0;
  for (word of arr){
    // console.log(word);
    lengthArr[i] = findWordLength(word);
    i++;
  }
  console.log(lengthArr);
}

map(words, function(word) {
  return word.length;
});

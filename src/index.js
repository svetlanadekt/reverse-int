module.exports = function reverse (n) {
  let arr = String(n).split('');
  
  let newArr = arr.reverse();
  
  for(let i = 0; i < newArr.length; i++) {
      if (newArr[i] == '-') {
          newArr.pop();
      }
  }
  let reversed = +(newArr.join(''));
  return reversed ;
};





function sumOfTwoArrays(arr1, arr2) {
  let result = [];
  if (arr1.length === arr2.length) {
    arr1.forEach((element, index) => {
      result.push(arr1[index] + arr2[index]);
    });
  } else {
    arr1.forEach((element, index) => {
      result.push(
        // (index <= arr1.length) ? index : (arr1[index] = 0)
        arr1[index === arr1.length ? (arr1[index] = 0) : index] +
          (arr2[index] ? arr2[index] : (arr2[index] = 0))
      );
    });
  }
  return result;
}

console.log(sumOfTwoArrays([1, 2, 3, 4], [1, 2, 3, 4, 5, 6]));

// 2-) You need to implement your own substring function.
//  You cannot use the built-in substring method.
//   ‘mySubstring’ function can take 3 parameters.
//  The first parameter is always the input string.
//  If the function is called with 3 parameters,
//   the second one is the beginning index, the third one is the ending index.
//    If the function is called with 2 parameters, the second is the beginning index,
//    the ending index will be the length of string.
//  Example:    mySubstring(‘This is awesome’,3,6);
// ‘s is’ mySubstring(‘This is awesome’,5); // ‘is awesome’

// This method extracts the characters in a string between "start" and "end",
//  not including "end" itself.
// If "start" is greater than "end",
// this method will swap the two arguments,
// meaning str.substring(1, 4) == str.substring(4, 1).
// If either "start" or "end" is less than 0, it is treated as if it were 0.
function mySubstring(string, startIndex, endIndex) {
  let newstring = "";
  for (let i = startIndex; i < string.length; i++) {
    if (i <= endIndex - 1) {
      newstring += string[i];
    }
  }
  return newstring;
}

console.log(mySubstring("Mohamed Hassan", 3, 5));
module.exports = { sumOfTwoArrays, mySubstring };

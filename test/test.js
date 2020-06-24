const assert = require("assert");
// import { sumOfTwoArrays, mySubstring } from "../app.js";

const { sumOfTwoArrays, mySubstring } = require("../app.js");

// function sumOfTwoArrays(arr1, arr2) {
//   let result = [];
//   if (arr1.length === arr2.length) {
//     arr1.forEach((element, index) => {
//       result.push(arr1[index] + arr2[index]);
//     });
//   } else {
//     arr1.forEach((element, index) => {
//       result.push(
//         // (index <= arr1.length) ? index : (arr1[index] = 0)
//         arr1[index === arr1.length ? (arr1[index] = 0) : index] +
//           (arr2[index] ? arr2[index] : (arr2[index] = 0))
//       );
//     });
//   }
//   return result;
// }

describe("sumOfTwoArrays", () => {
  it("one ", () => {
    assert.deepEqual(sumOfTwoArrays([1, 2, 3, 4], [1, 2, 3, 4, 5, 6]), [
      2,
      4,
      6,
      8,
    ]);
  });

  it("two ", () => {
    assert.deepEqual(sumOfTwoArrays([1, 2, 3, 4, 5, 6], [1, 2, 3, 4]), [
      2,
      4,
      6,
      8,
      5,
      6,
    ]);
  });

  it("three", () => {
    assert.deepEqual(sumOfTwoArrays([], []), []);
  });
  it("four", () => {
    assert.deepEqual(sumOfTwoArrays([1, 2, 3, 4], []), [1, 2, 3, 4]);
  });

  //   it("five", () => {
  //     assert.deepEqual(sumOfTwoArrays([], [1, 2, 3, 4]), [1, 2, 3, 4]);
  //   });
});

// Return true if the given non-negative number is a multiple of 3 or a multiple of 5. (Hint: Use the % 'mod' operator)

// Examples

// or35(3) → true
// or35(10) → true
// or35(8) → false

function or35(n) {
  if (n % 3 == 0 || n % 5 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(or35(3));
console.log(or35(8));
console.log(or35(10));

// Given a string, take the first 2 chars and return the string with the 2 chars added at both the front and back, so 'kitten' yields 'kikittenki' chars are there.

// Examples

// front22('kitten') → kikittenki
// front22('Ha') → HaHaHa
// front22('abc') → ababcab

function front22(str) {
  let char = str.charAt(0) + str.charAt(1);
  let result = char + str + char;
  return result;
}

console.log(front22("kitten"));
console.log(front22("Ha"));
console.log(front22("abc"));

/* Given a string, return true if the string starts with 'hi'and false otherwise.

Examples

startHi('hi there') → true
startHi('hi') → true
startHi('hello hi') → false */

function startHi(str) {
  let strToArr = str.split(" ");
  let result;
  if (strToArr[0] == "hi") {
    result = true;
  } else {
    result = false;
  }
  return result;
}

console.log(startHi("hi there"));
console.log(startHi("hi"));
console.log(startHi("hello hi"));

/* Given two temperatures, return true if one is less than 0 and the other is greater than 100.

Examples

icyHot(120, -1) → true
icyHot(-1, 120) → true
icyHot(2, 120) → false */

function icyHot(temp1, temp2) {
  let result;
  if (temp1 > 100 && temp2 < 0) {
    result = true;
  } else if (temp2 > 100 && temp1 < 0) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

console.log(icyHot(120, -1));
console.log(icyHot(-1, 120));
console.log(icyHot(2, 120));

/* Given 2 int values, return true if either of them is in the range 10..20 inclusive.

Examples

in1020(12, 99) → true
in1020(21, 12) → true
in1020(8, 99) → false */

function in1020(a, b) {
  let result;
  if ((a <= 20 && a >= 10) || (b <= 20 && b >= 10)) {
    result = true;
  } else {
    result = false;
  }

  return result;
}

console.log(in1020(12, 99));
console.log(in1020(21, 12));
console.log(in1020(8, 99));

/* We'll say that a number is 'teen' if it is in the range 13..19 inclusive. Given 3 int values, return true if 1 or more of them are teen.

Examples

hasTeen(13, 20, 10) → true
hasTeen(20, 19, 10) → true
hasTeen(20, 10, 13) → true */

function hasTeen(a, b, c) {
  let result;
  if ((a >= 13 && a <= 19) || (b >= 13 && b <= 19) || (c >= 13 && c <= 19)) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

console.log("----------------------");
console.log(hasTeen(13, 20, 10));

console.log(hasTeen(20, 10, 13));
console.log(hasTeen(20, 12, 10));

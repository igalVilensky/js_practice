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

// We'll say that a number is 'teen' if it is in the range 13..19 inclusive. Given 2 int values, return true if one or the other is teen, but not both.

// Examples

// loneTeen(13, 99) → true
// loneTeen(21, 19) → true
// loneTeen(13, 13) → false

function loneTeen(a, b) {
  let result;

  if ((a >= 13 && a <= 19) || (b >= 13 && b <= 19)) {
    result = true;

    if (a >= 13 && a <= 19 && b >= 13 && b <= 19) {
      result = false;
    }
  } else if (a === b) {
    result = false;
  }
  return result;
}

console.log("----------------------");
console.log(loneTeen(13, 99));
console.log(loneTeen(21, 19));
console.log(loneTeen(13, 13));
console.log(loneTeen(99, 99));

// Given a string, if the string "del" appears starting at index 1, return a string where that "del" has been deleted. Otherwise, return the string unchanged.

// Examples

// delDel('adelbc') → abc
// delDel('adelHello') → aHello
// delDel('abcdel') → abcdel

function delDel(str) {
  if (str.startsWith("del", 1)) {
    return str.charAt(0) + str.substring(4);
  } else {
    return str;
  }
}

console.log("----------------------");
console.log(delDel("adelbc"));
console.log(delDel("adelHello"));
console.log(delDel("abcdel"));

// Return true if the given string begins with 'mix', except the 'm' can be anything, so 'pix', '9ix' .. all count.

// Examples

// mixStart('mix snacks') → true
// mixStart('pix snacks') → true
// mixStart('piz snacks') → false

function mixStart(str) {
  if (str.startsWith("ix", 1)) {
    return true;
  }
  return false;
}

console.log("----------------------");
console.log(mixStart("mix snacks"));
console.log(mixStart("pix snacks"));
console.log(mixStart("piz snacks"));

// Given a string, return a string made of the first 2 chars (if present),

// however include first char only if it is 'o' and include the second only if it is 'z', so 'ozymandias' yields 'oz'.

// Examples

// startOz('ozymandias') → oz
// startOz('bzoo') → z
// startOz('oxx') → o

function startOz(str) {
  if (str.startsWith("oz", 0)) {
    return "oz";
  } else if (str.charAt(0) == "o" && str.charAt(1) !== "z") {
    return "o";
  } else if (str.charAt(0) !== "o" && str.charAt(1) == "z") {
    return "z";
  } else if (str.charAt(0) !== "o" && str.charAt(1) !== "z") {
    return "";
  }
}

console.log("----------------------");
console.log(startOz("abc"));
console.log(startOz("ozymandias"));
console.log(startOz("bzoo"));
console.log(startOz("oxx"));

// Given three int values, a b c, return the largest.

// Examples

// intMax(1, 2, 3) → 3
// intMax(1, 3, 2) → 3
// intMax(3, 2, 1) → 3

function intMax(a, b, c) {
  let result;

  if (a > c) {
    result = a;
    if (a < b) {
      result = b;
    }
  } else if (b > c) {
    result = b;
  } else {
    result = c;
  }

  return result;
}

console.log("------------------");
console.log(intMax(1, 2, 3));
console.log(intMax(1, 3, 2));
console.log(intMax(3, 2, 1));
console.log(intMax(5, 6, 2));

// Given 2 int values, return whichever value is nearest to the value 10, or return 0 in the event of a tie.

// Note that Math.abs(n) returns the absolute value of a number.

// Examples

// close10(8, 13) → 8
// close10(13, 8) → 8
// close10(13, 7) → 0

function close10(a, b) {
  let result;
  let num1 = Math.abs(10 - a);
  let num2 = Math.abs(10 - b);

  if (num1 < num2) {
    result = a;
  } else if (num1 == num2) {
    result = 0;
  } else {
    result = b;
  }

  return result;
}

console.log("------------------");
console.log(close10(8, 13));
console.log(close10(13, 8));
console.log(close10(13, 7));

// Given 2 int values, return true if they are both in the range 30..40 inclusive, or they are both in the range 40..50 inclusive.

// Examples

// in3050(30, 31) → true
// in3050(30, 41) → false
// in3050(40, 50) → true

function in3050(a, b) {
  let result;
  if (a >= 30 && a <= 40 && b >= 30 && b <= 40) {
    result = true;
  } else if (a >= 40 && a <= 50 && b >= 40 && b <= 50) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

console.log("------------------");
console.log(in3050(30, 31));
console.log(in3050(30, 41));
console.log(in3050(40, 50));

// Given 2 positive int values, return the larger value that is in the range 10..20 inclusive, or return 0 if neither is in that range.

// Examples

// max1020(11, 19) → 19
// max1020(19, 11) → 19
// max1020(11, 9) → 11

function max1020(a, b) {
  if (a >= 10 && a <= 20) {
    if (a >= b || b > 20) {
      return a;
    }
  }
  if (b >= 10 && b <= 20) {
    return b;
  }
  return 0;
}

console.log("------------------");
console.log(max1020(11, 19));
console.log(max1020(19, 11));
console.log(max1020(11, 9));
console.log(max1020(21, 8));

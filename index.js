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

// Return true if the given string contains between 1 and 3 'e' chars.

// Examples

// stringE('Hello') → true
// stringE('Heelle') → true
// stringE('Heelele') → false

function stringE(str) {
  let result;
  let strToArr = str.split("");
  let counter = 0;
  for (let i = 0; i < strToArr.length; i++) {
    if (strToArr[i] == "e") {
      counter += 1;
    }
  }
  if (counter >= 1 && counter <= 3) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

console.log("------------------");
console.log(stringE("Hello"));
console.log(stringE("Heelle"));
console.log(stringE("Heelele"));

// Given two non-negative int values, return true if they have the same last digit,

// such as with 27 and 57. Note that the % 'mod' operator computes remainders, so 17 % 10 is 7.

// Examples

// lastDigit(7, 17) → true
// lastDigit(6, 17) → false
// lastDigit(3, 113) → true

function lastDigit(a, b) {
  let result;
  let numToStr1 = a.toString(10);
  let numToStr2 = b.toString(10);
  console.log(numToStr1, numToStr2);

  if (a === b % 10) {
    result = true;
  } else if (b === a % 10) {
    result = true;
  } else {
    result = false;
  }

  return result;
}

console.log("------------------");
console.log(lastDigit(7, 17));
console.log(lastDigit(6, 17));
console.log(lastDigit(3, 113));
console.log(lastDigit(114, 4));

// Given a string, return a new string where the last 3 chars are now in upper case. If the string has less than 3 chars, uppercase whatever is there.

// Note that str.toUpperCase() returns the uppercase version of a string.

// Examples

// endUp('Hello') → HeLLO
// endUp('hi there') → hi thERE
// endUp('hi') → HI

function endUp(str) {
  let temp;
  let result;
  let scahr = str.substring(0, str.length - 3);
  temp = str.substring(str.length - 3);
  result = scahr + temp.toUpperCase();
  if (str.length < 3) {
    result = str.toUpperCase();
  }
  return result;
}

console.log("------------------");
console.log(endUp("Hello"));
console.log(endUp("hi there"));
console.log(endUp("hi"));

// Given a non-empty string and an int N, return the string made starting with char 0, and then every Nth char of the string.

// So if N is 3, use char 0, 3, 6, ... and so on. N is 1 or more.

// Examples

// everyNth('Miracle', 2) → Mrce
// everyNth('abcdefg', 2) → aceg
// everyNth('abcdefg', 3) → adg

function everyNth(str, n) {
  let temp;
  let result;
  let interval = n;
  temp = str.split("").filter((char, index) => index % interval == 0);
  result = temp.join("");
  return result;
}

console.log("------------------");
console.log(everyNth("Miracle", 2));
console.log(everyNth("abcdefg", 2));
console.log(everyNth("abcdefg", 3));

// Given a string and a non-negative int n, return a larger string that is n copies of the original string.

// Examples

// stringTimes('Hi', 2) → HiHi
// stringTimes('Hi', 3) → HiHiHi
// stringTimes('Hi', 1) → Hi

function stringTimes(str, n) {
  return str.repeat(n);
}

console.log("------------------");
console.log(stringTimes("Hi", 2));
console.log(stringTimes("Hi", 3));
console.log(stringTimes("Hi", 1));

// Given a string and a non-negative int n, we'll say that the front of the string is the first 3 chars,

// or whatever is there if the string is less than length 3. Return n copies of the front.

// Examples

// frontTimes('Chocolate', 2) → ChoCho
// frontTimes('Chocolate', 3) → ChoChoCho
// frontTimes('Abc', 3) → AbcAbcAbc

function frontTimes(str, n) {
  let result;
  if (str.length >= 3) {
    result = str.substring(0, 3).repeat(n);
  } else {
    result = str.repeat(n);
  }
  return result;
}

console.log("------------------");
console.log(frontTimes("Chocolate", 2));
console.log(frontTimes("Chocolate", 3));
console.log(frontTimes("Abc", 3));
console.log(frontTimes("Ab", 4));
console.log(frontTimes("A", 4));
console.log(frontTimes("", 4));

// Count the number of 'xx' in the given string. We'll say that overlapping is allowed, so 'xxx' contains 2 'xx'.

// Examples

// countXX('abcxx') → 1
// countXX('xxx') → 2
// countXX('xxxx') → 3

/* function countXX(str) {
  let result;
  let counter = 0;
  let strToArr = str.split("");
  let lcheck = str.split(" ");
  let temp;
  if (lcheck.length > 1) {
    temp = lcheck.join("").split("");
    console.log(temp);
    for (let j = 0; j < temp.length; j++) {
      if (temp[j] === "x") {
        counter++;
        console.log(counter);
        result = counter - 1;
      } else if (temp[j] !== "x") {
        result = 0;
        break;
      }
    }
  }

  for (let i = 0; i < strToArr.length; i++) {
    if (strToArr[i] === "x") {
      counter++;
      result = counter - 1;
    } else if (strToArr[i] !== "x") {
      result = 0;
    }
  }
  return result;
}

console.log("------------------");
console.log(countXX("abcxx"));
console.log(countXX("xxx"));
console.log(countXX("xxxx"));
console.log(countXX("abc"));
console.log(countXX("Hexxo Thxxe")); */

/* function countXX1(str) {
  let result;
  let result2;
  let temp;
  let counter = 1;
  let counter2 = 1;
  let strToArr = str.split("");

  function removeWhiteSpaceFromArray(strToArr) {
    strToArr = str.split("");

    temp = strToArr.filter((item) => item != " ");
    result2 = temp.filter((item) => item === "x");
    counter = result2.length - 1;

    return counter;
  }
  result = removeWhiteSpaceFromArray(str);
  for (let i = 0; i < strToArr.length; i++) {
    if (strToArr[i] === "x") {
      counter++;
    } else if (strToArr[i] !== "x") {
      counter = 0;
      result = 0;
    }
  }

  return result;
}


console.log(countXX1("Hexxo Thxxe"));
console.log(countXX1("abc"));
console.log(countXX1("xxx")); */

// Count the number of 'xx' in the given string. We'll say that overlapping is allowed, so 'xxx' contains 2 'xx'.

// Examples

// countXX('abcxx') → 1
// countXX('xxx') → 2
// countXX('xxxx') → 3

function countXX(str) {
  let temp = str.split(" ");
  let result;
  let strToArr = str.split("");
  let counter = 0;
  let temp2;

  result = strToArr.filter((item) => item === "x");
  counter = result.length - 1;
  if (counter < 0) {
    counter = 0;
  } else if (temp.length > 1 && counter === 0) {
    counter = 0;

    temp2 = strToArr.filter((item) => item != " ");
    result = temp2.filter((item) => item === "x");
    counter = result.length - 1;
  } else if (temp.length > 1 && counter > 0) {
    console.log("hi");
    counter = 1 * temp.length;
  }

  return counter;
}
console.log("------------------");
console.log(countXX("abcxx"));
console.log(countXX("xxx"));
console.log(countXX("Hexxo Thxxe"));
console.log(countXX("Hello There"));
/* console.log(countXX("abc")); */

// Given a string, return true if the first instance of "x" in the string is immediately followed by another "x".

// Examples

// doubleX('axxbb') → true
// doubleX('axaxax') → false
// doubleX('xxxxx') → true

function doubleX(str) {
  let num = str.indexOf("x");
  let result;
  if (num == -1) {
    result = false;
  }
  result = str.substring(num);
  return result.startsWith("xx");
}

console.log("------------------");
console.log(doubleX("axxbb"));
console.log(doubleX("axaxax"));
console.log(doubleX("xxxxx"));

// Given a string, return a new string made of every other char starting with the first, so "Hello" yields "Hlo".

// Examples

// stringBits('Hello') → Hlo
// stringBits('Hi') → H
// stringBits('Heeololeo') → Hello

function stringBits(str) {
  let result;
  let otherChar = str.split("").filter((element, index) => {
    return index % 2 === 0;
  });
  result = otherChar.join("");
  return result;
}

console.log("------------------");
console.log(stringBits("Hello"));
console.log(stringBits("Hi"));
console.log(stringBits("Heeololeo"));

/* Given a non-empty string like "Code" return a string like "CCoCodCode". */

function stringSplosion(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j <= i; j++) result += str.charAt(j);
  }
  return result;
}

console.log("------------------");
console.log(stringSplosion("code"));

/* Given a string, return the count of the number of times that a substring length 2 appears in the string and also as the last 2 chars of the string, 

so "hixxxhi" yields 1 (we won't count the end substring).

Examples

last2('hixxhi') → 1
last2('xaxxaxaxx') → 1
last2('axxaaxx') → 1 */

function last2(str) {
  let counter;
  if (str.length <= 2) {
    counter = 0;
  }
  if (str.length === 0) {
    return (counter = 0);
  }
  let lastTwoChars = str.substring(str.length - 2);
  counter = 0;
  for (let i = 0; i < str.length; i++) {
    let sub = str.substring(i, i + 2);
    if (sub === lastTwoChars) {
      counter++;
    }
  }

  return counter - 1;
}

console.log("------------------");
console.log(last2("hixxhi"));
console.log(last2("xaxxaxaxx"));
console.log(last2("axxaaxx"));
console.log(last2("ax"));
console.log(last2("xxaxxaxxaxx"));
console.log(last2(""));

// Given an array of ints, return the number of 9's in the array.

// Examples

// arrayCount9([1,2,9]) → 1
// arrayCount9([1,9,9]) → 2
// arrayCount9([1,9,9,3,9]) → 3

function arrayCount9(nums) {
  let result;
  if (nums.length === 0) return 0;
  for (let i = 0; i < nums.length; i++) {
    result = nums.filter((item) => item === 9);
  }
  return result.length;
}

console.log("------------------");
console.log(arrayCount9([1, 2, 9]));
console.log(arrayCount9([1, 9, 9]));
console.log(arrayCount9([1, 9, 9, 3, 9]));
console.log(arrayCount9([]));

/* Given an array of ints, return true if one of the first 4 elements in the array is a 9. The array length may be less than 4.

Examples

arrayFront9([1,2,9,3,4]) → true
arrayFront9([1,2,3,4,9]) → false
arrayFront9([1,2,3,4,5]) → false */

function arrayFront9(nums) {
  let result;
  let numsToStr = nums.join("");
  let firstDigits = numsToStr.substring(0, 4);
  if (firstDigits.includes("9")) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

console.log("------------------");
console.log(arrayFront9([1, 2, 9, 3, 4]));
console.log(arrayFront9([1, 2, 3, 4, 9]));
console.log(arrayFront9([1, 2, 3, 4, 5]));

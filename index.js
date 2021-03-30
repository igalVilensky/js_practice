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

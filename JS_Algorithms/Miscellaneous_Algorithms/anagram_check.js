// const isAnagram = function(s, t) {
//   if (s.length !== t.length) return false;

//   let sortedS = s.split("").sort().join("");
//   let sortedT = t.split("").sort().join("");

//   return sortedS === sortedT;
// };


// Include unicode characters
const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const charCount = new Map();

  for (const char of s) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (const char of t) {
    if (!charCount.has(char)) return false;
    const count = charCount.get(char) - 1;
    if (count < 0) return false;
    charCount.set(char, count);
  }

  return true;
};

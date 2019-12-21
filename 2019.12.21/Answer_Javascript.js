const lengthOfLongestSubstring = s => {
  let c = "",
    si = "",
    a = 0,
    p = 0;
  for (let i = 0, l = s.length - 1; i <= l; i += 1) {
    si = s.charAt(i);
    p = c.indexOf(si) + 1;
    if (a < c.length) a = c.length;
    c = c.slice(p) + si;
    if (a < c.length) a = c.length;
  }
  return a;
};

const l = lengthOfLongestSubstring("abcabcbb");
// 3

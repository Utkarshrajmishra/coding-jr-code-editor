export const problems = [
  {
    id: 1,
    title: "Merge Strings Alternately",
    difficulty: "Easy",
    tags: ["Two Pointers", "String"],
    desc: `
You are given two strings \`word1\` and \`word2\`.  

Merge the strings by adding letters in alternating order, starting with \`word1\`.  
If a string is longer than the other, append the additional letters onto the end of the merged string.  

Return the merged string.
`,
    example: {
      input: " word1: abc, word2: pqr" ,
      output: "apbqcr",
      explanation: "Merge alternately: a from word1, p from word2, etc.",
    },
    testCases: [
      { input: " word1: ab, word2: pqrs ", output: "apbqrs" },
      { input: " word1: abcd, word2: pq ", output: "apbqcd" },
    ],
    constraints: [
      "1 <= word1.length, word2.length <= 100",
      "word1 and word2 consist of lowercase English letters",
    ],
  },
  {
    id: 2,
    title: "Reverse a String",
    difficulty: "Easy",
    tags: ["Two Pointers", "String"],
    desc: `
Write a function that reverses a string.  

The input string is given as an array of characters \`s\`.  

You must do this by modifying the input array in-place with O(1) extra memory.
`,
    example: {
      input: { s: ["h", "e", "l", "l", "o"] },
      output: ["o", "l", "l", "e", "h"],
      explanation: "The array is reversed in-place.",
    },
    testCases: [
      {
        input: { s: ["H", "a", "n", "n", "a", "h"] },
        output: ["h", "a", "n", "n", "a", "H"],
      },
      { input: { s: ["a", "b"] }, output: ["b", "a"] },
    ],
    constraints: [
      "1 <= s.length <= 10^5",
      "s[i] is a printable ascii character.",
    ],
  },
  {
    id: 3,
    title: "Sum of Two Integers",
    difficulty: "Easy",
    tags: ["Math", "Bit Manipulation"],
    desc: `
Calculate the sum of two integers \`a\` and \`b\` without using the operators \`+\` and \`-\`.  

You can use bitwise operations to perform the addition.
`,
    example: {
      input: { a: 1, b: 2 },
      output: 3,
      explanation: "Sum is 3 without using '+' or '-'.",
    },
    testCases: [
      { input: { a: 2, b: 3 }, output: 5 },
      { input: { a: -1, b: 1 }, output: 0 },
    ],
    constraints: ["-1000 <= a, b <= 1000"],
  },
  {
    id: 4,
    title: "Valid Parentheses",
    difficulty: "Easy",
    tags: ["Stack", "String"],
    desc: `
Given a string \`s\` containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.  

An input string is valid if:  
- Open brackets are closed by the same type of brackets.  
- Open brackets are closed in the correct order.
`,
    example: {
      input: { s: "()[]{}" },
      output: true,
      explanation: "The input has valid matching parentheses.",
    },
    testCases: [
      { input: { s: "(]" }, output: false },
      { input: { s: "([)]" }, output: false },
    ],
    constraints: ["1 <= s.length <= 10^4", "s consists of parentheses only."],
  },
  {
    id: 5,
    title: "Longest Common Prefix",
    difficulty: "Easy",
    tags: ["String"],
    desc: `
Write a function to find the longest common prefix string amongst an array of strings.  

If there is no common prefix, return an empty string "".

All given inputs are in lowercase letters a-z.
`,
    example: {
      input: { strs: ["flower", "flow", "flight"] },
      output: "fl",
      explanation: "Common prefix is 'fl'.",
    },
    testCases: [
      { input: { strs: ["dog", "racecar", "car"] }, output: "" },
      {
        input: { strs: ["interspecies", "interstellar", "interstate"] },
        output: "inters",
      },
    ],
    constraints: ["1 <= strs.length <= 200", "0 <= strs[i].length <= 200"],
  },
];
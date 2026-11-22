// Task 1: Functions, Arrow Functions & Control Flow
// Processes test results of multiple learners.

// 1. Regular function: returns "Pass" if marks >= 50, otherwise "Fail"
function calculateResult(marks) {
  if (marks >= 50) {
    return "Pass";
  } else {
    return "Fail";
  }
}

// 2. Arrow function: displays the learner's name and result
const displayResult = (name, result) => {
  console.log(`${name} - ${result}`);
};

// 3. Array of learner data
const learners = [
  { name: "Anu", marks: 75 },
  { name: "Rahul", marks: 42 },
  { name: "Meena", marks: 68 },
  { name: "Arun", marks: 35 }
];

// 4. for...of loop to process each learner one by one
for (const learner of learners) {
  // 5. Determine the result and display it
  const result = calculateResult(learner.marks);
  displayResult(learner.name, result);
}

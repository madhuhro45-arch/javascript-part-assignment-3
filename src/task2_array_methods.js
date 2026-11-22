// Task 2: Arrays & Array Methods
// Uses forEach(), map() and filter() on an array of student objects.

let students = [
  { name: "John", marks: 85, grade: "A" },
  { name: "David", marks: 72, grade: "B" },
  { name: "Peter", marks: 90, grade: "A+" },
  { name: "Sarah", marks: 65, grade: "C" }
];

// 1. forEach() - print the details of every student
console.log("All Students:");
students.forEach((student) => {
  console.log(`${student.name} - ${student.marks} - ${student.grade}`);
});

// 2. map() - new array containing only the names
const studentNames = students.map((student) => student.name);
console.log("Student Names:");
console.log(studentNames);

// 3. filter() - new array of students who scored 80 or above
const topStudents = students.filter((student) => student.marks >= 80);
console.log("Students who scored 80 or above:");
console.log(topStudents);

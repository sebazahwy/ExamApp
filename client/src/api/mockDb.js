export const mockDb = {
  exams: [
    {
      id: "exam-1",
      title: "JavaScript Basics",
      questions: [
        { id: 1, text: "What is a closure?", options: ["A function with its lexical environment", "A type of loop", "A CSS property"], answer: 0 },
        { id: 2, text: "What does 'DOM' stand for?", options: ["Document Object Model", "Data Object Mode", "Digital Ordinance Management"], answer: 0 }
      ]
    },
    {
      id: "exam-2",
      title: "React Fundamentals",
      questions: [
        { id: 1, text: "What is a hook?", options: ["A special function", "A class component", "A lifecycle method only"], answer: 0 },
        { id: 2, text: "What is JSX?", options: ["JavaScript XML", "Java Syntax Extension", "JSON XML"], answer: 0 }
      ]
    }
  ],
  studentScores: [
    { studentName: "Alice", examId: "exam-1", score: 85 },
    { studentName: "Bob", examId: "exam-1", score: 90 }
  ]
};

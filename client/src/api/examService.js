import { mockDb } from './mockDb';

// זמן דיליי שמדמה בקשת רשת לשרת
const DELAY = 500;

// שליפת כל המבחנים מה־Mock API
export const getAllExams = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...mockDb.exams]);
    }, DELAY);
  });
};

// חיפוש מבחן לפי ID
export const getExamById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      // חיפוש מבחן במערך המבחנים
      const exam = mockDb.exams.find(e => e.id === id);

      // אם נמצא מבחן מחזירים אותו
      if (exam) {
        resolve({ ...exam });
      } else {

        // אם לא נמצא מבחן מחזירים שגיאה
        reject(new Error("Exam not found"));
      }
    }, DELAY);
  });
};

// יצירת מבחן חדש והוספתו למאגר
export const createExam = (exam) => {
  return new Promise((resolve) => {
    setTimeout(() => {

      // יצירת ID ייחודי למבחן
      const newExam = { ...exam, id: `exam-${Date.now()}` };

      // הוספת המבחן החדש למערך
      mockDb.exams.push(newExam);

      resolve(newExam);
    }, DELAY);
  });
};

// שליפת ציוני הסטודנטים
export const getStudentScores = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...mockDb.studentScores]);
      }, DELAY);
    });
  };
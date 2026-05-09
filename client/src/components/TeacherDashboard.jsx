import React, { useState, useEffect } from 'react';
import { getAllExams } from '../api/examService';

const TeacherDashboard = () => {

  // שמירת רשימת המבחנים
  const [exams, setExams] = useState([]);

  // בדיקה האם הנתונים עדיין בטעינה
  const [loading, setLoading] = useState(true);

  // טעינת המבחנים בעת פתיחת הקומפוננטה
  useEffect(() => {
    getAllExams()
      .then(data => {

        // שמירת הנתונים שהתקבלו
        setExams(data);

        // סיום מצב טעינה
        setLoading(false);
      })
      .catch(err => {

        // הדפסת שגיאה במקרה של תקלה
        console.error(err);

        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h2 className="mb-0">Teacher Dashboard</h2>
        </div>

        <div className="card-body">
          <h4>Available Exams</h4>

          {loading ? (

            // הצגת אנימציית טעינה
            <div className="text-center my-4">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>

          ) : (

            // הצגת כל המבחנים
            <div className="row mt-3">
              {exams.map(exam => (
                <div key={exam.id} className="col-md-6 mb-3">
                  <div className="card h-100 border-info">
                    <div className="card-body">

                      {/* כותרת המבחן */}
                      <h5 className="card-title text-info">{exam.title}</h5>

                      {/* מזהה המבחן */}
                      <p className="card-text text-muted">ID: {exam.id}</p>

                      {/* מספר שאלות במבחן */}
                      <p className="card-text">{exam.questions.length} Questions</p>

                      <button className="btn btn-outline-info btn-sm">
                        Manage Exam
                      </button>

                    </div>
                  </div>
                </div>
              ))}

              {/* הודעה אם אין מבחנים */}
              {exams.length === 0 && <p className="text-center">No exams found.</p>}
            </div>
          )}

          <div className="mt-4">

             {/* כפתור יצירת מבחן חדש */}
             <button className="btn btn-success">
                Create New Exam
             </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
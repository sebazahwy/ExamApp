import React, { useState } from 'react';
import { getExamById } from '../api/examService';

const StudentPortal = () => {
  const [examId, setExamId] = useState('');
  const [exam, setExam] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFetchExam = () => {
    if (!examId.trim()) {
      setError('Please enter a valid Exam ID');
      return;
    }

    setLoading(true);
    setError('');
    setExam(null);

    getExamById(examId)
      .then(data => {
        setExam(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Exam not found. Please check the ID and try again.');
        setLoading(false);
      });
  };

  return (
    <div className="container mt-4">
      <div className="card shadow border-warning">
        <div className="card-header bg-warning text-dark">
          <h2 className="mb-0">Student Portal</h2>
        </div>
        <div className="card-body">
          <div className="row justify-content-center my-4">
            <div className="col-md-8 text-center">
              <h4>Start Your Exam</h4>
              <div className="input-group mb-3 mt-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Exam ID to Start (e.g., exam-1)"
                  value={examId}
                  onChange={(e) => setExamId(e.target.value)}
                />
                <button 
                  className="btn btn-warning" 
                  type="button"
                  onClick={handleFetchExam}
                  disabled={loading}
                >
                  {loading ? 'Searching...' : 'Find Exam'}
                </button>
              </div>
              {error && <div className="alert alert-danger">{error}</div>}
            </div>
          </div>

          {exam && (
            <div className="card mt-4 border-success">
              <div className="card-body">
                <h4 className="card-title text-success">Exam Found: {exam.title}</h4>
                <p className="card-text">Total Questions: {exam.questions.length}</p>
                <button className="btn btn-primary px-5 py-2">Start Exam Now</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentPortal;

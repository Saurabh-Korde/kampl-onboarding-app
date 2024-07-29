
import React from 'react';

const SubmissionMessage: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-green-600 mb-4">Submission Successful!</h1>
        <p className="text-lg">Your information has been successfully submitted!</p>
      </div>
    </div>
  );
};

export default SubmissionMessage;

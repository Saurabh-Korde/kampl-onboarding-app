import React from 'react';
import { useWizardStore } from '../store/wizardStore';
import Step1 from './FormComponents/Step1';
import Step2 from './FormComponents/Step2';
import Step3 from './FormComponents/Step3';
import Step4 from './FormComponents/Step4';
import Step5 from './FormComponents/Step5';
import Step6 from './FormComponents/Step6';

const Wizard: React.FC = () => {
  const { step, nextStep, prevStep, goToStep } = useWizardStore();
  const totalSteps = 6;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-xl bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Step {step} of {totalSteps}</h2>
        </div>
        <div className="relative flex justify-between items-center mb-6">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 rounded" style={{ transform: 'translateY(-50%)' }} />
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-blue-500 rounded" style={{ transform: 'translateY(-50%)', width: `${(step - 1) * 100 / (totalSteps - 1)}%`, transition: 'width 1s ease' }} />
          {[...Array(totalSteps)].map((_, index) => (
            <div key={index} className="relative flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${index + 1 <= step ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-900'}`}
                style={{
                  transition: 'background-color 1s ease, color 1s ease',
                }}
              >
                {index + 1}
              </div>
            </div>
          ))}
        </div>
        <div className="mb-4">
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}
          {step === 4 && <Step4 />}
          {step === 5 && <Step5 />}
          {step === 6 && <Step6 />}
        </div>
        <div className="flex justify-between">
          <button
            className="bg-gray-500 text-white py-2 px-4 rounded transition-colors duration-300"
            onClick={prevStep}
            disabled={step === 1}
            style={{
              marginRight: '10px',
            }}
          >
            Previous
          </button>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded transition-colors duration-300"
            onClick={nextStep}
            disabled={step === totalSteps}
          >
            Next
          </button>
        </div>
        <div className="mt-4">
          <button
            className="text-blue-500 underline transition-colors duration-300"
            onClick={() => goToStep(1)}
          >
            Start Over
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wizard;

import React from 'react';
import { useWizardStore } from '../../store/wizardStore';
const Step6: React.FC = () => {
  const { formData } = useWizardStore();

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Step 6: Review</h3>
      <p className="mb-4">Please review your information before submission:</p>
      <ul className="list-disc list-inside mb-4">
        <li>{`Name: ${formData.firstName} ${formData.lastName}`}</li>
        <li>{`Email: ${formData.email}`}</li>
        <li>{`Address: ${formData.address}, ${formData.city}`}</li>
        {/* Add other review items */}
      </ul>
      {/* Add any additional review information */}
    </div>
  );
};

export default Step6;

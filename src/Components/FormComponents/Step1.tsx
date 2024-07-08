import React from 'react';
import { useWizardStore } from '../../store/wizardStore';

const Step1: React.FC = () => {
  const { formData, setFormData } = useWizardStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ [name]: value });
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Step 1: Personal Information</h3>
      <div className="mb-4">
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter your first name"
          className="input-field"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter your last name"
          className="input-field"
        />
      </div>
      {/* Add other form inputs for Step 1 */}
    </div>
  );
};

export default Step1;

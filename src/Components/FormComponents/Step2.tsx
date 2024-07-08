import React from 'react';
import { useWizardStore } from '../../store/wizardStore';

const Step2: React.FC = () => {
  const { formData, setFormData } = useWizardStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ [name]: value });
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Step 2: Contact Information</h3>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email address"
          className="input-field"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          className="input-field"
        />
      </div>
      {/* Add other form inputs for Step 2 */}
    </div>
  );
};

export default Step2;

import React from 'react';
import { useWizardStore } from '../../store/wizardStore';

const Step3: React.FC = () => {
  const { formData, setFormData } = useWizardStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ [name]: value });
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Step 3: Address Information</h3>
      <div className="mb-4">
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
          Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter your address"
          className="input-field"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
          City
        </label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Enter your city"
          className="input-field"
        />
      </div>
      {/* Add other form inputs for Step 3 */}
    </div>
  );
};

export default Step3;

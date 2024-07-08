import React from 'react';
import { useWizardStore } from '../../store/wizardStore';

const Step4: React.FC = () => {
  const { formData, setFormData } = useWizardStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ [name]: value });
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Step 4: Additional Information</h3>
      <div className="mb-4">
        <label htmlFor="age" className="block text-sm font-medium text-gray-700">
          Age
        </label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Enter your age"
          className="input-field"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="comments" className="block text-sm font-medium text-gray-700">
          Comments
        </label>
        <textarea
          id="comments"
          name="comments"
          value={formData.comments}
       
          placeholder="Any additional comments"
          rows={4}
          className="input-field"
        />
      </div>
      {/* Add other form inputs for Step 4 */}
    </div>
  );
};

export default Step4;

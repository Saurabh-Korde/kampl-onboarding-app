import React from 'react';
import { useWizardStore } from '../../store/wizardStore';


const Step5: React.FC = () => {
  const { formData, setFormData } = useWizardStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ [name]: value });
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Step 5: Agreement</h3>
      <div className="mb-4">
        <label htmlFor="agreement" className="flex items-center">
          <input
            type="checkbox"
            id="agreement"
            name="agreement"
            checked={formData.agreement}
            onChange={(e) => setFormData({ agreement: e.target.checked })}
            className="mr-2"
          />
          <span className="text-sm text-gray-700">I agree to the terms and conditions</span>
        </label>
      </div>
      {/* Add other form inputs for Step 5 */}
    </div>
  );
};

export default Step5;

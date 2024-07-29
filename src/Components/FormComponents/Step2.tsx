import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useWizardStore } from '../../store/wizardStore';
import { validationSchemaStep2 } from '../../Validation/validationSchemas';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './customStyles.css';

const Step2: React.FC = () => {
  const { formData, setFormData, prevStep, nextStep } = useWizardStore();

  const formik = useFormik({
    initialValues: {
      qualification: formData.qualification || '',
      certification: formData.certification || '',
      workExperience: formData.workExperience || '',
      overAllExperience: formData.overAllExperience || '',
      lastEmployer: formData.lastEmployer || '',
      lastctc: formData.lastctc || '',
      salaryInHand: formData.salaryInHand || '',
      internationalWorker: formData.internationalWorker || false,
      originStateAndCountry: formData.originStateAndCountry || '',
      passportNumber: formData.passportNumber || '',
      passportValidity: formData.passportValidity ? new Date(formData.passportValidity) : undefined,
    },
    validationSchema: validationSchemaStep2,
    onSubmit: (values) => {
      setFormData({
        ...values,
        passportValidity: values.passportValidity ? values.passportValidity.toString().split('T')[0] : undefined,
      });
      nextStep();
    },
  });

  useEffect(() => {
    // Update Zustand formData only if there are significant changes
    setFormData({
      qualification: formik.values.qualification,
      certification: formik.values.certification,
      workExperience: formik.values.workExperience,
      overAllExperience: formik.values.overAllExperience,
      lastEmployer: formik.values.lastEmployer,
      lastctc: formik.values.lastctc,
      salaryInHand: formik.values.salaryInHand,
      internationalWorker: formik.values.internationalWorker,
      originStateAndCountry: formik.values.originStateAndCountry,
      passportNumber: formik.values.passportNumber,
      passportValidity: formik.values.passportValidity ? formik.values.passportValidity.toString().split('T')[0] : undefined,
    });
  }, [formik.values, setFormData]);

  const handleWorkExperienceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    formik.setValues({
      ...formik.values,
      workExperience: value,
      ...(value === 'fresher' ? {
        overAllExperience: '',
        lastEmployer: '',
        lastctc: '',
        salaryInHand: '',
        internationalWorker:false,
        originStateAndCountry:'',
        passportNumber:'',
        passportValidity:undefined
      } : {})
    });
  };

  const handleInternationalWorkerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
  
    formik.setFieldValue('internationalWorker', checked);
  
    if (checked) {
      // If checked, set additional fields with formData values
      formik.setFieldValue('originStateAndCountry', formData.originStateAndCountry);
      formik.setFieldValue('passportNumber', formData.passportNumber);
      formik.setFieldValue('passportValidity', formData.passportValidity ? new Date(formData.passportValidity) : undefined);
    } else {
      // If not checked, clear additional fields
      formik.setFieldValue('originStateAndCountry', '');
      formik.setFieldValue('passportNumber', '');
      formik.setFieldValue('passportValidity', undefined);
    }
  };
  

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-4">
        {/* Qualification Field */}
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full lg:w-1/2 px-2 mb-4 lg:mb-0">
            <label htmlFor="qualification" className="block text-sm font-medium text-gray-700">
              Qualification
            </label>
            <div className="relative">
              <select
                id="qualification"
                name="qualification"
                value={formik.values.qualification}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="appearance-none border-2 border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select qualification</option>
                <option value="10th">10th</option>
                <option value="12th">12th</option>
                <option value="ITI">ITI</option>
                <option value="Diploma">Diploma</option>
                <option value="Degree">Degree</option>
                <option value="Graduate">Graduate</option>
                <option value="Postgraduate">Postgraduate</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M7 10l5 5 5-5H7z" />
                </svg>
              </div>
            </div>
            {formik.touched.qualification && formik.errors.qualification ? (
              <div className="text-red-500 text-sm">{formik.errors.qualification}</div>
            ) : null}
          </div>

          {/* Specialization Field */}
          <div className="w-full lg:w-1/2 px-2 mb-4 lg:mb-0">
            <label htmlFor="certification" className="block text-sm font-medium text-gray-700">
              Specialization
            </label>
            <input
              type="text"
              id="certification"
              name="certification"
              value={formik.values.certification}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter Specialization"
              className="appearance-none border-2 border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {formik.touched.certification && formik.errors.certification ? (
              <div className="text-red-500 text-sm">{formik.errors.certification}</div>
            ) : null}
          </div>
        </div>

        {/* Work Experience Field */}
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full px-2">
            <label className="block text-sm font-medium text-gray-700">
              Work Experience
            </label>
            <div className="flex items-center mt-2">
              <label className="mr-4">
                <input
                  type="radio"
                  id="fresher"
                  name="workExperience"
                  value="fresher"
                  checked={formik.values.workExperience === 'fresher'}
                  onChange={handleWorkExperienceChange}
                  className="mr-1"
                />
                Fresher
              </label>
              <label>
                <input
                  type="radio"
                  id="experienced"
                  name="workExperience"
                  value="experienced"
                  checked={formik.values.workExperience === 'experienced'}
                  onChange={handleWorkExperienceChange}
                  className="mr-1"
                />
                Experienced
              </label>
            </div>
          </div>
        </div>

        {/* Conditional Fields for Experienced */}
        {formik.values.workExperience === 'experienced' && (
          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full lg:w-1/3 px-2 mb-4 lg:mb-0">
              <label htmlFor="overAllExperience" className="block text-sm font-medium text-gray-700">
                Overall Work Experience (years)
              </label>
              <input
                type="text"
                id="overAllExperience"
                name="overAllExperience"
                value={formik.values.overAllExperience}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter overall experience"
                className="appearance-none border-2 border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {formik.touched.overAllExperience && formik.errors.overAllExperience ? (
                <div className="text-red-500 text-sm">{formik.errors.overAllExperience}</div>
              ) : null}
            </div>
            <div className="w-full lg:w-1/3 px-2 mb-4 lg:mb-0">
              <label htmlFor="lastEmployer" className="block text-sm font-medium text-gray-700">
                Last Employer
              </label>
              <input
                type="text"
                id="lastEmployer"
                name="lastEmployer"
                value={formik.values.lastEmployer}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter last employer"
                className="appearance-none border-2 border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {formik.touched.lastEmployer && formik.errors.lastEmployer ? (
                <div className="text-red-500 text-sm">{formik.errors.lastEmployer}</div>
              ) : null}
            </div>
            <div className="w-full lg:w-1/3 px-2 mb-4 lg:mb-0">
              <label htmlFor="lastctc" className="block text-sm font-medium text-gray-700">
                Last CTC (in INR)
              </label>
              <input
                type="text"
                id="lastctc"
                name="lastctc"
                value={formik.values.lastctc}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter last CTC"
                className="appearance-none border-2 border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {formik.touched.lastctc && formik.errors.lastctc ? (
                <div className="text-red-500 text-sm">{formik.errors.lastctc}</div>
              ) : null}
            </div>
            <div className="w-full lg:w-1/3 px-2 mb-4 lg:mb-0">
              <label htmlFor="salaryInHand" className="block text-sm font-medium text-gray-700">
                Salary In Hand (in INR)
              </label>
              <input
                type="text"
                id="salaryInHand"
                name="salaryInHand"
                value={formik.values.salaryInHand}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter salary in hand"
                className="appearance-none border-2 border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {formik.touched.salaryInHand && formik.errors.salaryInHand ? (
                <div className="text-red-500 text-sm">{formik.errors.salaryInHand}</div>
              ) : null}
            </div>
           
          <div className="w-full lg:w-1/3 px-2 mb-4 lg:mb-0 mt-8">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                id="internationalWorker"
                name="internationalWorker"
                checked={formik.values.internationalWorker}
                onChange={handleInternationalWorkerChange}
                className="form-checkbox "
              />
              <span className="ml-1 block text-sm font-medium text-gray-700">International Worker</span>
            </label>
          </div>
        </div>
         
        )}  
        

        {/* Conditional Fields for International Worker */}
        {formik.values.internationalWorker && (
          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full lg:w-1/3 px-2 mb-4 lg:mb-0">
              <label htmlFor="originStateAndCountry" className="block text-sm font-medium text-gray-700">
                Origin State & Country
              </label>
              <input
                type="text"
                id="originStateAndCountry"
                name="originStateAndCountry"
                value={formik.values.originStateAndCountry}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter state and country"
                className="appearance-none border-2 border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {formik.touched.originStateAndCountry && formik.errors.originStateAndCountry ? (
                <div className="text-red-500 text-sm">{formik.errors.originStateAndCountry}</div>
              ) : null}
            </div>
            <div className="w-full lg:w-1/3 px-2 mb-4 lg:mb-0">
              <label htmlFor="passportNumber" className="block text-sm font-medium text-gray-700">
                Passport Number
              </label>
              <input
                type="text"
                id="passportNumber"
                name="passportNumber"
                value={formik.values.passportNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter passport number"
                className="appearance-none border-2 border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {formik.touched.passportNumber && formik.errors.passportNumber ? (
                <div className="text-red-500 text-sm">{formik.errors.passportNumber}</div>
              ) : null}
            </div>
            <div className="w-full lg:w-1/3 px-2 mb-4 lg:mb-0">
  <label htmlFor="passportValidity" className="block text-sm font-medium text-gray-700 ml-20">
    Passport Validity
  </label>
  <div className="relative ml-20">
    <DatePicker
      id="passportValidity"
      name="passportValidity"
      selected={formik.values.passportValidity ? new Date(formik.values.passportValidity) : null}
      onChange={(date: Date | null) => formik.setFieldValue('passportValidity', date ? date.toISOString() : undefined)}
      dateFormat="dd-MM-yyyy"
      placeholderText="Enter date"
      className="appearance-none border border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-10 bg-white shadow-md transition-shadow duration-200 ease-in-out hover:shadow-lg"
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
    />
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 7V3m8 4V3m-6 8h6m-8 4h8M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z"
        />
      </svg>
    </div>
  </div>
  {formik.touched.passportValidity && formik.errors.passportValidity ? (
    <div className="text-red-500 text-sm">{formik.errors.passportValidity}</div>
  ) : null}
</div>

          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={prevStep}
            className="bg-gray-500 text-white py-2 px-4 rounded-lg"
          >
            Previous
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg"
          >
            Next
          </button>
        </div>
      </div>
    </form>
  );
};

export default Step2;

import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useWizardStore } from '../../store/wizardStore';
import {  validationSchemaStep2  } from '../../Validation/validationSchemas';

const Step1: React.FC = () => {
  const { formData, setFormData, prevStep } = useWizardStore();

  const formik = useFormik({
    initialValues: {
      qualification: formData.qualification,
      certification: formData.certification,
      workExperience: formData.workExperience,
      overAllExperience: formData.overAllExperience,
      lastEmployer: formData.lastEmployer,
      lastctc: formData.lastctc,
      salaryInHand: formData.salaryInHand,
      internationalWorker: formData.internationalWorker,
      originStateAndCountry: formData.originStateAndCountry,
      passportNumber: formData.passportNumber,
      passportValidity: formData.passportValidity
    },
    validationSchema:  validationSchemaStep2,
    onSubmit: (values) => {
      setFormData(values);
      useWizardStore.getState().nextStep();
    },
  });

  useEffect(() => {
    // Save form data to store whenever form values change
    setFormData(formik.values);
  }, [formik.values, setFormData]);


  const handleWorkExperienceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === 'fresher') {
      formik.setValues({
        ...formik.values,
        workExperience: value,
        overAllExperience: '',
        lastEmployer: '',
        lastctc: '',
        salaryInHand: ''
      });
    } else {
      formik.setValues({
        ...formik.values,
        workExperience: value
      });
    }
  };

  const handleInternationalWorkerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    formik.setValues({
      ...formik.values,
      internationalWorker: checked,
      originStateAndCountry: checked ? formData.originStateAndCountry : '',
      passportNumber: checked ? formData.passportNumber : '',
      passportValidity: checked ? formData.passportValidity : ''
    });
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-4">
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full lg:w-1/2 px-2 mb-4 lg:mb-0">
            <label htmlFor="qualification" className="block text-sm font-medium text-gray-700">
              Qualification
            </label>
            <select
              id="qualification"
              name="qualification"
              value={formik.values.qualification}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="">Select qualification</option>
              <option value="highschool">High School</option>
              <option value="undergrad">Undergraduate</option>
              <option value="postgrad">Postgraduate</option>
            </select>
            {formik.touched.qualification && formik.errors.qualification ? (
              <div className="text-red-500 text-sm">{formik.errors.qualification}</div>
            ) : null}
          </div>
          <div className="w-full lg:w-1/2 px-2 mb-4 lg:mb-0">
            <label htmlFor="certification" className="block text-sm font-medium text-gray-700">
              Certification
            </label>
            <input
              type="text"
              id="certification"
              name="certification"
              value={formik.values.certification}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter certification"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
            {formik.touched.certification && formik.errors.certification ? (
              <div className="text-red-500 text-sm">{formik.errors.certification}</div>
            ) : null}
          </div>
        </div>

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
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
              {formik.touched.lastEmployer && formik.errors.lastEmployer ? (
                <div className="text-red-500 text-sm">{formik.errors.lastEmployer}</div>
              ) : null}
            </div>
            <div className="w-full lg:w-1/3 px-2 mb-4 lg:mb-0">
              <label htmlFor="lastctc" className="block text-sm font-medium text-gray-700">
                Last CTC
              </label>
              <input
                type="text"
                id="lastctc"
                name="lastctc"
                value={formik.values.lastctc}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter last CTC"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
              {formik.touched.lastctc && formik.errors.lastctc ? (
                <div className="text-red-500 text-sm">{formik.errors.lastctc}</div>
              ) : null}
            </div>
            <div className="w-full lg:w-1/3 px-2 mb-4 lg:mb-0">
              <label htmlFor="salaryInHand" className="block text-sm font-medium text-gray-700">
                Salary In Hand
              </label>
              <input
                type="text"
                id="salaryInHand"
                name="salaryInHand"
                value={formik.values.salaryInHand}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter salary in hand"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
              {formik.touched.salaryInHand && formik.errors.salaryInHand ? (
                <div className="text-red-500 text-sm">{formik.errors.salaryInHand}</div>
              ) : null}
            </div>
            <div className="flex flex-wrap -mx-2 mb-4">

            <div className="inline-flex items-center m-5">
  <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="check">
    <input type="checkbox"
      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10 border-gray-800"
      id="check"
      name="internationalWorker"
      checked={formik.values.internationalWorker}
      onChange={handleInternationalWorkerChange}
      />
    <span
      className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
        stroke="currentColor" stroke-width="1">
        <path fill-rule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clip-rule="evenodd"></path>
      </svg>
    </span>
  </label>
  <label className="block text-sm font-medium text-gray-700" htmlFor="check">
  International Worker
  </label>
</div> 
          
        </div>
          </div>
        )}


       

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
                placeholder="Enter origin state and country"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
              {formik.touched.passportNumber && formik.errors.passportNumber ? (
                <div className="text-red-500 text-sm">{formik.errors.passportNumber}</div>
              ) : null}
            </div>
            <div className="w-full lg:w-1/3 px-2 mb-4 lg:mb-0">
              <label htmlFor="passportValidity" className="block text-sm font-medium text-gray-700">
                Passport Validity Date
              </label>
              <input
                type="date"
                id="passportValidity"
                name="passportValidity"
                value={formik.values.passportValidity}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Select passport validity date"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
              {formik.touched.passportValidity && formik.errors.passportValidity ? (
                <div className="text-red-500 text-sm">{formik.errors.passportValidity}</div>
              ) : null}
            </div>
            
          </div>
        )}

       
      </div>
      <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={prevStep}
            className="bg-gray-500 text-white py-2 px-4 rounded-lg focus:outline-none focus:bg-gray-700"
          >
            Previous
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg focus:outline-none focus:bg-blue-700"
          >
            Next
          </button>
        </div>
    </form>
  );
};

export default Step1;

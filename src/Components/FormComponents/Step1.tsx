import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useWizardStore } from '../../store/wizardStore';
import { validationSchemaStep1 } from '../../Validation/validationSchemas';

const Step1: React.FC = () => {
  const { formData, setFormData, step, prevStep } = useWizardStore();

  const formik = useFormik({
    initialValues: {
      firstName: formData.firstName || '',
      lastName: formData.lastName || '',
      middleName: formData.middleName || '',
      dateOfBirth: formData.dateOfbirth || '',
      emailId: formData.emailId || '',
      gender: formData.gender || '',
      mobileNumber: formData.mobileNumber || '',
      joiningDate: formData.joiningDate || '',
      joiningDepartment: formData.joiningDepartment || '',
      nationality: formData.nationality || '',
      currentAddress: formData.currentAddress || '',
      permanentAddress: formData.permenantAddress || ''
    },
    validationSchema: validationSchemaStep1,
    onSubmit: (values) => {
      setFormData(values);
      useWizardStore.getState().nextStep();
    },
  });

  useEffect(() => {
    // Save form data to store whenever form values change
    setFormData(formik.values);
  }, [formik.values, setFormData]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-4">
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full lg:w-1/3 px-2 mb-4 lg:mb-0">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your first name"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="text-red-500 text-sm">{formik.errors.firstName}</div>
            ) : null}
          </div>
          <div className="w-full lg:w-1/3 px-2">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your last name"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="text-red-500 text-sm">{formik.errors.lastName}</div>
            ) : null}
          </div>
          <div className="w-full lg:w-1/3 px-2">
            <label htmlFor="middleName" className="block text-sm font-medium text-gray-700">
              Middle Name
            </label>
            <input
              type="text"
              id="middleName"
              name="middleName"
              value={formik.values.middleName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your middle name"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
            {formik.touched.middleName && formik.errors.middleName ? (
              <div className="text-red-500 text-sm">{formik.errors.middleName}</div>
            ) : null}
          </div>
        </div>

        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full lg:w-1/2 px-2 mb-4 lg:mb-0">
            <label htmlFor="emailId" className="block text-sm font-medium text-gray-700">
              Email Id
            </label>
            <input
              type="email"
              id="emailId"
              name="emailId"
              value={formik.values.emailId}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your email"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
            {formik.touched.emailId && formik.errors.emailId ? (
              <div className="text-red-500 text-sm">{formik.errors.emailId}</div>
            ) : null}
          </div>
          <div className="w-full lg:w-1/2 px-2">
            <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
              Date Of Birth:
            </label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formik.values.dateOfBirth}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your date of birth"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
            {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
              <div className="text-red-500 text-sm">{formik.errors.dateOfBirth}</div>
            ) : null}
          </div>
        </div>

        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full lg:w-1/2 px-2 mb-4 lg:mb-0">
            <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">
              Mobile Number
            </label>
            <input
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              value={formik.values.mobileNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your mobile number"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
            {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
              <div className="text-red-500 text-sm">{formik.errors.mobileNumber}</div>
            ) : null}
          </div>
          <div className="w-full lg:w-1/2 px-2">
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="" label="Select gender" />
              <option value="male" label="Male" />
              <option value="female" label="Female" />
              <option value="other" label="Other" />
            </select>
            {formik.touched.gender && formik.errors.gender ? (
              <div className="text-red-500 text-sm">{formik.errors.gender}</div>
            ) : null}
          </div>
        </div>

        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full lg:w-1/2 px-2 mb-4 lg:mb-0">
            <label htmlFor="joiningDate" className="block text-sm font-medium text-gray-700">
              Joining Date
            </label>
            <input
              type="date"
              id="joiningDate"
              name="joiningDate"
              value={formik.values.joiningDate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
            {formik.touched.joiningDate && formik.errors.joiningDate ? (
              <div className="text-red-500 text-sm">{formik.errors.joiningDate}</div>
            ) : null}
          </div>
          <div className="w-full lg:w-1/2 px-2">
            <label htmlFor="joiningDepartment" className="block text-sm font-medium text-gray-700">
              Joining Department
            </label>
            <input
              type="text"
              id="joiningDepartment"
              name="joiningDepartment"
              value={formik.values.joiningDepartment}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your joining department"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
            {formik.touched.joiningDepartment && formik.errors.joiningDepartment ? (
              <div className="text-red-500 text-sm">{formik.errors.joiningDepartment}</div>
            ) : null}
          </div>
        </div>

        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full lg:w-1/2 px-2 mb-4 lg:mb-0">
            <label htmlFor="nationality" className="block text-sm font-medium text-gray-700">
              Nationality
            </label>
            <input
              type="text"
              id="nationality"
              name="nationality"
              value={formik.values.nationality}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your nationality"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
            {formik.touched.nationality && formik.errors.nationality ? (
              <div className="text-red-500 text-sm">{formik.errors.nationality}</div>
            ) : null}
          </div>
          <div className="w-full lg:w-1/2 px-2">
            <label htmlFor="currentAddress" className="block text-sm font-medium text-gray-700">
              Current Address
            </label>
            <input
              type="text"
              id="currentAddress"
              name="currentAddress"
              value={formik.values.currentAddress}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your current address"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
            {formik.touched.currentAddress && formik.errors.currentAddress ? (
              <div className="text-red-500 text-sm">{formik.errors.currentAddress}</div>
            ) : null}
          </div>
        </div>

        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full lg:w-1/2 px-2 mb-4 lg:mb-0">
            <label htmlFor="permanentAddress" className="block text-sm font-medium text-gray-700">
              Permanent Address
            </label>
            <input
              type="text"
              id="permanentAddress"
              name="permanentAddress"
              value={formik.values.permanentAddress}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your permanent address"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
            {formik.touched.permanentAddress && formik.errors.permanentAddress ? (
              <div className="text-red-500 text-sm">{formik.errors.permanentAddress}</div>
            ) : null}
          </div>
        </div>

        <div className="flex justify-between">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg focus:outline-none focus:bg-gray-300"
            >
              Previous
            </button>
          )}
          
        </div>
      </div>
      <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={prevStep}
            className="bg-gray-500 text-white py-2 px-4 rounded-lg focus:outline-none focus:bg-gray-700"
            disabled={step==1}
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

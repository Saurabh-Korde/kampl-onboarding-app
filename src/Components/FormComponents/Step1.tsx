import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useWizardStore } from '../../store/wizardStore';
import { validationSchemaStep1 } from '../../Validation/validationSchemas';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the CSS for date picker
import './customStyles.css'; // Import custom CSS for the select dropdown

const Step1: React.FC = () => {
  const { formData, setFormData, step, prevStep } = useWizardStore();

  const formik = useFormik({
    initialValues: {
      firstName: formData.firstName || '',
      middleName: formData.middleName || '',
      lastName: formData.lastName || '',
      dateOfBirth: formData.dateOfBirth ? new Date(formData.dateOfBirth) : undefined,
      emailId: formData.emailId || '',
      gender: formData.gender || '',
      mobileNumber: formData.mobileNumber || '',
      joiningDate: formData.joiningDate ? new Date(formData.joiningDate) : undefined,
      joiningDepartment: formData.joiningDepartment || '',
      nationality: formData.nationality || '',
      currentAddress: formData.currentAddress || '',
      permenentAddress: formData.permenentAddress || ''
    },
    validationSchema: validationSchemaStep1,
    onSubmit: (values) => {
      setFormData({
        ...values,
        dateOfBirth: values.dateOfBirth ? values.dateOfBirth.toISOString() : undefined,
        joiningDate: values.joiningDate ? values.joiningDate.toISOString() : undefined
      });
      useWizardStore.getState().nextStep();
    },
  });

  useEffect(() => {
    const formattedValues = {
      ...formik.values,
      dateOfBirth: formik.values.dateOfBirth ? formik.values.dateOfBirth.toISOString() : undefined,
      joiningDate: formik.values.joiningDate ? formik.values.joiningDate.toISOString() : undefined,
    };
    setFormData(formattedValues);
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
              className="appearance-none border-2 border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="text-red-500 text-sm">{formik.errors.firstName}</div>
            ) : null}
          </div>

          <div className="w-full lg:w-1/3 px-2 mb-4 lg:mb-0">
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
              className="appearance-none border-2 border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {formik.touched.middleName && formik.errors.middleName ? (
              <div className="text-red-500 text-sm">{formik.errors.middleName}</div>
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
              className="appearance-none border-2 border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="text-red-500 text-sm">{formik.errors.lastName}</div>
            ) : null}
          </div>
        </div>

        <div className="flex flex-wrap -mx-2 mb-4">
      <div className="w-full lg:w-1/3 px-2 mb-4 lg:mb-0 ">
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
          className="appearance-none border border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {formik.touched.emailId && formik.errors.emailId ? (
          <div className="text-red-500 text-sm">{formik.errors.emailId}</div>
        ) : null}
      </div>

      <div className="w-full lg:w-1/3 px-2 mb-4 lg:mb-0  ">
        <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 ml-20">
          Date Of Birth
        </label>
        <div className="relative ml-20">
          <DatePicker
            id="dateOfBirth"
            selected={formik.values.dateOfBirth}
            onChange={(date) => formik.setFieldValue('dateOfBirth', date)}
            onBlur={formik.handleBlur}
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
        {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
          <div className="text-red-500 text-sm">{formik.errors.dateOfBirth}</div>
        ) : null}
      </div>

      <div className="w-full lg:w-1/3 px-2 mb-4 lg:mb-0">
        <label htmlFor="joiningDate" className="block text-sm font-medium text-gray-700 ml-20">
          Joining Date
        </label>
        <div className="relative ml-20">
          <DatePicker
            id="joiningDate"
            selected={formik.values.joiningDate}
            onChange={(date) => formik.setFieldValue('joiningDate', date)}
            onBlur={formik.handleBlur}
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
        {formik.touched.joiningDate && formik.errors.joiningDate ? (
          <div className="text-red-500 text-sm">{formik.errors.joiningDate}</div>
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
              className="appearance-none border-2 border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
              <div className="text-red-500 text-sm">{formik.errors.mobileNumber}</div>
            ) : null}
          </div>

          <div className="w-full lg:w-1/2 px-2 mb-4 lg:mb-0">
  <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
    Gender
  </label>
  <div className="relative">
    <select
      id="gender"
      name="gender"
      value={formik.values.gender}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      className="appearance-none border-2 border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    >
      <option value="">Select gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
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
  {formik.touched.gender && formik.errors.gender ? (
    <div className="text-red-500 text-sm">{formik.errors.gender}</div>
  ) : null}
</div>

        </div>
        <div className="flex flex-wrap -mx-2 mb-4">


        <div className="w-full lg:w-1/2 px-2 mb-4 lg:mb-0">
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
              className="appearance-none border-2 border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {formik.touched.joiningDepartment && formik.errors.joiningDepartment ? (
              <div className="text-red-500 text-sm">{formik.errors.joiningDepartment}</div>
            ) : null}
          </div>

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
              className="appearance-none border-2 border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {formik.touched.nationality && formik.errors.nationality ? (
              <div className="text-red-500 text-sm">{formik.errors.nationality}</div>
            ) : null}
          </div>


        </div>

       

        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full lg:w-1/2 px-2">
            <label htmlFor="currentAddress" className="block text-sm font-medium text-gray-700">
              Current Address
            </label>
            <textarea
              id="currentAddress"
              name="currentAddress"
              value={formik.values.currentAddress}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your current address"
              className="appearance-none border-2 border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={4}
            />
            {formik.touched.currentAddress && formik.errors.currentAddress ? (
              <div className="text-red-500 text-sm">{formik.errors.currentAddress}</div>
            ) : null}
          </div>

          <div className="w-full lg:w-1/2 px-2">
            <label htmlFor="permenentAddress" className="block text-sm font-medium text-gray-700">
              Permanent Address
            </label>
            <textarea
              id="permenentAddress"
              name="permenentAddress"
              value={formik.values.permenentAddress}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your permanent address"
              className="appearance-none border-2 border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={4}
            />
            {formik.touched.permenentAddress && formik.errors.permenentAddress ? (
              <div className="text-red-500 text-sm">{formik.errors.permenentAddress}</div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          disabled={step==1}
          className="bg-gray-500 text-white py-2 px-4 rounded-lg focus:outline-none focus:bg-gray-700"
        >
         Back
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default Step1;

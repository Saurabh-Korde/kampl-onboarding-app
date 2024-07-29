import React, { useEffect } from "react";
import { useWizardStore } from "../../store/wizardStore";
import { useFormik } from "formik";
import { validationSchemaStep4 } from "../../Validation/validationSchemas";

const Step4: React.FC = () => {
  const { formData, setFormData, step, prevStep } = useWizardStore();

  const formik = useFormik({
    initialValues: {
      physicianName: formData.physicianName || "",
      physicianNumber: formData.physicianNumber || "",
      bloodGroup: formData.bloodGroup || "",
      height: formData.height || "",
      weight: formData.weight || "",
      allergies: formData.allergies || "",
      esic: formData.esic || false,
    },
    validationSchema: validationSchemaStep4,
    onSubmit: (values) => {
      setFormData(values);
      useWizardStore.getState().nextStep();
    },
  });

  useEffect(() => {
    setFormData(formik.values);
  }, [formik.values, setFormData]);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    formik.setValues({
      ...formik.values,
      [name]: checked,
    });
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-4">
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full lg:w-1/2 px-2 mb-4 lg:mb-0">
            <label
              htmlFor="physicianName"
              className="block text-sm font-medium text-gray-700"
            >
              Physician Name
            </label>
            <input
              type="text"
              id="physicianName"
              name="physicianName"
              value={formik.values.physicianName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter physician name"
              className="appearance-none border-2 border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {formik.touched.physicianName && formik.errors.physicianName ? (
              <div className="text-red-500 text-sm">
                {formik.errors.physicianName}
              </div>
            ) : null}
          </div>
          <div className="w-full lg:w-1/2 px-2">
            <label
              htmlFor="physicianNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Physician Contact Number
            </label>
            <input
              type="text"
              id="physicianNumber"
              name="physicianNumber"
              value={formik.values.physicianNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter physician number"
              className="appearance-none border-2 border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {formik.touched.physicianNumber && formik.errors.physicianNumber ? (
              <div className="text-red-500 text-sm">
                {formik.errors.physicianNumber}
              </div>
            ) : null}
          </div>
        </div>

        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full lg:w-1/2 px-2 mb-4 lg:mb-0">
            <label
              htmlFor="bloodGroup"
              className="block text-sm font-medium text-gray-700"
            >
              Blood Group
            </label>
            <div className="relative">
              <select
                id="bloodGroup"
                name="bloodGroup"
                value={formik.values.bloodGroup}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="appearance-none border-2 border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="" label="Select Blood Group" />
                <option value="A+" label="A Positive" />
                <option value="B+" label="B Positive" />
                <option value="AB+" label="AB Positive" />
                <option value="O+" label="O Positive" />
                <option value="A-" label="A Negative" />
                <option value="B-" label="B Negative" />
                <option value="AB-" label="AB Negative" />
                <option value="O-" label="O Negative" />
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
            {formik.touched.bloodGroup && formik.errors.bloodGroup ? (
              <div className="text-red-500 text-sm">
                {formik.errors.bloodGroup}
              </div>
            ) : null}
          </div>
          <div className="w-full lg:w-1/2 px-2">
            <label
              htmlFor="height"
              className="block text-sm font-medium text-gray-700"
            >
              Height
            </label>
            <input
              type="number"
              id="height"
              name="height"
              value={formik.values.height}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your height(cm)"
              className="appearance-none border-2 border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {formik.touched.height && formik.errors.height ? (
              <div className="text-red-500 text-sm">{formik.errors.height}</div>
            ) : null}
          </div>
        </div>

        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full lg:w-1/2 px-2 mb-4 lg:mb-0">
            <label
              htmlFor="weight"
              className="block text-sm font-medium text-gray-700"
            >
              Weight
            </label>
            <input
              type="number"
              id="weight"
              name="weight"
              value={formik.values.weight}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your weight(kg)"
              className="appearance-none border-2 border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {formik.touched.weight && formik.errors.weight ? (
              <div className="text-red-500 text-sm">{formik.errors.weight}</div>
            ) : null}
          </div>
          <div className="w-full lg:w-1/2 px-2">
            <label
              htmlFor="allergies"
              className="block text-sm font-medium text-gray-700"
            >
              Allergies (If any)
            </label>
            <input
              type="text"
              id="allergies"
              name="allergies"
              value={formik.values.allergies}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter allergies"
              className="appearance-none border-2 border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {formik.touched.allergies && formik.errors.allergies ? (
              <div className="text-red-500 text-sm">
                {formik.errors.allergies}
              </div>
            ) : null}
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="esic"
              name="esic"
              checked={formik.values.esic}
              onChange={handleCheckboxChange}
              onBlur={formik.handleBlur}
              className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="esic" className="block text-sm font-medium text-gray-700">
              ESIC (If applicable)
            </label>
          </div>
        </div>

        <div className="flex justify-between mt-8">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="bg-gray-500 text-white py-2 px-4 rounded-lg focus:outline-none focus:bg-gray-700"
            >
              Back
            </button>
          )}
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg focus:outline-none focus:bg-blue-700"
          >
            Next
          </button>
        </div>
      </div>
    </form>
  );
};

export default Step4;

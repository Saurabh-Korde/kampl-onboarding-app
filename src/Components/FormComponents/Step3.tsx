import React from 'react';
import { useFormik, FieldArray, FormikProvider, FormikErrors } from 'formik';
import { useWizardStore } from '../../store/wizardStore';
import { validationSchemaStep3 } from '../../Validation/validationSchemas';

// Define interface for family member
interface FamilyMember {
  name: string;
  relationship: string;
  emergencyContact: string;
  isEmergencyContact: boolean;
}

const Step3: React.FC = () => {
  const { formData, setFormData, prevStep, nextStep } = useWizardStore();

  const formik = useFormik({
    initialValues: {
      maritalStatus: formData.maritalStatus || '',
      numberOfChildren: formData.numberOfChildren || '',
      familyMembers: formData.familyMembers && formData.familyMembers.length
        ? formData.familyMembers
        : [
            {
              name: '',
              relationship: '',
              emergencyContact: '',
              isEmergencyContact: false,
            },
          ],
    },
    validationSchema: validationSchemaStep3,
    onSubmit: (values) => {
      setFormData(values);
      nextStep();
    },
  });

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit}>
        {/* Personal Details */}
        <div className="flex flex-wrap -mx-4">
  {/* Marital Status */}
  <div className="w-full lg:w-1/2 px-4 mb-4">
  <label htmlFor="maritalStatus" className="block text-sm font-medium text-gray-700">
    Marital Status
  </label>
  <div className="relative">
    <select
      id="maritalStatus"
      name="maritalStatus"
      value={formik.values.maritalStatus}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      className="appearance-none border-2 border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
      <option value="" label="Select marital status" />
      <option value="Single" label="Single" />
      <option value="Married" label="Married" />
      <option value="Divorced" label="Divorced" />
      <option value="Widowed" label="Widowed" />
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
  {formik.touched.maritalStatus && formik.errors.maritalStatus ? (
    <div className="text-red-500 text-sm">{formik.errors.maritalStatus}</div>
  ) : null}
</div>


  {/* Number of Children */}
  {
    formik.values.maritalStatus=='Single'?null:
    <div className="w-full lg:w-1/2 px-4 mb-4">
    <label htmlFor="numberOfChildren" className="block text-sm font-medium text-gray-700">
      Number of Children
    </label>
    <input
    min={0}
      type="number"
      id="numberOfChildren"
      name="numberOfChildren"
      value={formik.values.numberOfChildren}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      placeholder="Enter number of children"
      className="appearance-none border-2 border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    {formik.touched.numberOfChildren && formik.errors.numberOfChildren ? (
      <div className="text-red-500 text-sm">{formik.errors.numberOfChildren}</div>
    ) : null}
  </div>
  }
 
</div>

        {/* Family Members */}
        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-2">Family Members</h2>
          <FieldArray name="familyMembers">
            {({ push, remove }) => (
              <>
                {formik.values.familyMembers.map((_, index: number) => (
                  <div key={index} className="flex flex-wrap -mx-4 mb-6">
                    {/* Name */}
                    <div className="w-full lg:w-1/3 px-4">
                      <label htmlFor={`familyMembers.${index}.name`} className="block text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <input
                        type="text"
                        id={`familyMembers.${index}.name`}
                        name={`familyMembers.${index}.name`}
                        value={formik.values.familyMembers[index].name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Enter name"
                        className="appearance-none border-2 border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      {formik.touched.familyMembers?.[index]?.name && formik.errors.familyMembers?.[index]? (
                        <div className="text-red-500 text-sm">{(formik.errors.familyMembers[index] as FormikErrors<FamilyMember>)?.name}</div>
                      ) : null}
                    </div>

                    {/* Relationship */}
                    <div className="w-full lg:w-1/3 px-4">
  <label htmlFor={`familyMembers.${index}.relationship`} className="block text-sm font-medium text-gray-700">
    Relationship
  </label>
  <div className="relative">
    <select
      id={`familyMembers.${index}.relationship`}
      name={`familyMembers.${index}.relationship`}
      value={formik.values.familyMembers[index].relationship}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      className="appearance-none border-2 border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
      <option value="" label="Select relationship" />
      <option value="Spouse" label="Spouse" />
      <option value="Mother" label="Mother" />
      <option value="Father" label="Father" />
      <option value="Sister" label="Sister" />
      <option value="Brother" label="Brother" />
      <option value="Daughter" label="Daughter" />
      <option value="Son" label="Son" />
      <option value="Other" label="Other" />
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
  {formik.touched.familyMembers?.[index]?.relationship && formik.errors.familyMembers?.[index] ? (
    <div className="text-red-500 text-sm">{(formik.errors.familyMembers[index] as FormikErrors<FamilyMember>)?.relationship}</div>
  ) : null}
</div>



                    {/* Emergency Contact */}
                    <div className="w-full lg:w-1/3 px-4">
                      <label htmlFor={`familyMembers.${index}.emergencyContact`} className="block text-sm font-medium text-gray-700">
                        Contact
                      </label>
                      <input
                        type="text"
                        id={`familyMembers.${index}.emergencyContact`}
                        name={`familyMembers.${index}.emergencyContact`}
                        value={formik.values.familyMembers[index].emergencyContact}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Enter contact"
                        className="appearance-none border-2 border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
                    {formik.touched.familyMembers?.[index]?.emergencyContact && formik.errors.familyMembers?.[index] ? (
  <div className="text-red-500 text-sm">{(formik.errors.familyMembers[index] as FormikErrors<FamilyMember>)?.emergencyContact}</div>
) : null}
                    </div>

                    {/* Save as Emergency Contact */}
                    <div className="w-full lg:w-1/3 px-4">
                      <label htmlFor={`familyMembers.${index}.isEmergencyContact`} className="block text-sm font-medium text-gray-700">
                        Save as Emergency Contact
                      </label>
                      <input
                        type="checkbox"
                        id={`familyMembers.${index}.isEmergencyContact`}
                        name={`familyMembers.${index}.isEmergencyContact`}
                        checked={formik.values.familyMembers[index].isEmergencyContact}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      // className="bg-gray-200 appearance-none border-2 border-gray-200 rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      />
                    </div>

                    {/* Remove Button */}
                    <div className="w-full px-4 flex justify-end items-end mt-4">
                      <button
                        type="button"
                        onClick={() => remove(index)}
                        className="bg-red-500 text-white py-2 px-4 rounded-lg mr-2 focus:outline-none focus:bg-red-700"
                      >
                        -
                      </button>
                      {index === formik.values.familyMembers.length - 1 && (
                        <button
                          type="button"
                          onClick={() => push({ name: '', relationship: '', emergencyContact: '', isEmergencyContact: false })}
                          className="bg-green-500 text-white py-2 px-4 rounded-lg focus:outline-none focus:bg-green-700"
                        >
                         +
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </>
            )}
          </FieldArray>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={prevStep}
            className="bg-gray-500 text-white py-2 px-4 rounded-lg focus:outline-none focus:bg-gray-700"
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg focus:outline-none focus:bg-blue-700"
          >
            Next
          </button>
        </div>
      </form>
    </FormikProvider>
  );
};

export default Step3;

import React from "react";
import { useWizardStore } from "../../store/wizardStore";
import { Link } from 'react-router-dom';
const Step6: React.FC = () => {
  // const { formData } = useWizardStore();
  const { formData, step, prevStep,resetForm } = useWizardStore();
  const renderFieldValue = (value: any) => {
    return value ? value : "NA";
  };
 
  const handleSubmit = () => {
    resetForm();
  };



  return (
    <div>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th
              className="text-center py-2 px-4 bg-gray-100 border-b border-gray-200"
              colSpan={4}
            >
              Employee Details
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Employee Name</td>
            <td
              className="border px-4 py-2"
              colSpan={3}
            >{`${formData.firstName} ${formData.middleName} ${formData.lastName}`}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Email</td>
            <td className="border px-4 py-2" colSpan={3}>
              {renderFieldValue(formData.emailId)}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Date Of Birth</td>
            <td className="border px-4 py-2" colSpan={3}>
              {renderFieldValue(formData.dateOfBirth)}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Mobile Number</td>
            <td className="border px-4 py-2" colSpan={3}>
              {renderFieldValue(formData.mobileNumber)}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Gender</td>
            <td className="border px-4 py-2" colSpan={3}>
              {renderFieldValue(formData.gender)}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Joining Date</td>
            <td className="border px-4 py-2" colSpan={3}>
              {renderFieldValue(formData.joiningDate)}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Joining Department</td>
            <td className="border px-4 py-2" colSpan={3}>
              {renderFieldValue(formData.joiningDepartment)}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Nationality</td>
            <td className="border px-4 py-2" colSpan={3}>
              {renderFieldValue(formData.nationality)}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Current Address</td>
            <td className="border px-4 py-2" colSpan={3}>
              {renderFieldValue(formData.currentAddress)}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Permanent Address</td>
            <td className="border px-4 py-2" colSpan={3}>
              {renderFieldValue(formData.permenentAddress)}
            </td>
          </tr>
          <tr>
            <td
              className="text-center py-2 px-4 bg-gray-100 border-b font-bold border-gray-200"
              colSpan={4}
            >
              Professional Details
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Qualification</td>
            <td className="border px-4 py-2" colSpan={3}>
              {formData.qualification}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Specialization</td>
            <td className="border px-4 py-2" colSpan={3}>
              {renderFieldValue(formData.certification)}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Work Experience</td>
            <td className="border px-4 py-2" colSpan={3}>
              {renderFieldValue(formData.workExperience)}
            </td>
          </tr>
          {formData.workExperience === "experienced" && (
            <>
              <tr>
                <td className="border px-4 py-2">Overall Work Experience</td>
                <td className="border px-4 py-2" colSpan={3}>
                  {renderFieldValue(formData.overAllExperience)}
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Last Employer</td>
                <td className="border px-4 py-2" colSpan={3}>
                  {renderFieldValue(formData.lastEmployer)}
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Last CTC</td>
                <td className="border px-4 py-2" colSpan={3}>
                  {renderFieldValue(formData.lastctc)}
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Salary In-Hand</td>
                <td className="border px-4 py-2" colSpan={3}>
                  {renderFieldValue(formData.salaryInHand)}
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">International Worker</td>
                <td className="border px-4 py-2" colSpan={3}>
                  {renderFieldValue(
                    formData.internationalWorker ? "Yes" : "No"
                  )}
                </td>
              </tr>
              {formData.internationalWorker && (
                <>
                  <tr>
                    <td className="border px-4 py-2">Origin State & Country</td>
                    <td className="border px-4 py-2" colSpan={3}>
                      {renderFieldValue(formData.originStateAndCountry)}
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Passport Number</td>
                    <td className="border px-4 py-2" colSpan={3}>
                      {renderFieldValue(formData.passportNumber)}
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Passport Validity Date</td>
                    <td className="border px-4 py-2" colSpan={3}>
                      {renderFieldValue(formData.passportValidity)}
                    </td>
                  </tr>
                </>
              )}
            </>
          )}
          <tr>
            <td
              className="text-center py-2 px-4 bg-gray-100 border-b font-bold border-gray-200"
              colSpan={4}
            >
              Family Details
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Marital Status</td>
            <td className="border px-4 py-2" colSpan={3}>
              {renderFieldValue(formData.maritalStatus)}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">No of Children</td>
            <td className="border px-4 py-2" colSpan={3}>
              {formData.numberOfChildren}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-bold" colSpan={4}>
              Family Member Details
            </td>
          </tr>
          <tr>
            {/* <td colSpan={2}> */}
            <td className="border px-4 py-2">Name</td>
            <td className="border px-4 py-2">Relationship</td>
            <td className="border px-4 py-2">Contact</td>
            <td className="border px-4 py-2">Is Emergency Contact</td>
            {/* </td> */}
          </tr>
          {formData.familyMembers.map((member) => (
            <tr key={member.name} className="border">
              <td className="border px-4 py-2">{member.name}</td>
              <td className="border px-4 py-2">{member.relationship}</td>
              <td className="border px-4 py-2">{member.emergencyContact}</td>
              <td className="border px-4 py-2">
                {member.isEmergencyContact ? "Yes" : "No"}
              </td>
            </tr>
          ))}
          <tr>
            <td
              className="text-center py-2 px-4 bg-gray-100 border-b font-bold border-gray-200"
              colSpan={4}
            >
              Medical Details
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Physician Name</td>
            <td className="border px-4 py-2" colSpan={3}>
              {renderFieldValue(formData.physicianName)}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Physicoan Number</td>
            <td className="border px-4 py-2" colSpan={3}>
              {renderFieldValue(formData.physicianNumber)}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Blood Group</td>
            <td className="border px-4 py-2" colSpan={3}>
              {renderFieldValue(formData.bloodGroup)}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Height </td>
            <td className="border px-4 py-2" colSpan={3}>
              {renderFieldValue(formData.height)}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Weight </td>
            <td className="border px-4 py-2" colSpan={3}>
              {renderFieldValue(formData.weight)}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Allergies </td>
            <td className="border px-4 py-2" colSpan={3}>
              {renderFieldValue(formData.allergies)}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">ESIC </td>
            <td className="border px-4 py-2" colSpan={3}>
              {formData.esic ? "Applicable" : "Not Applicable"}
            </td>
          </tr>
          <tr>
            <td
              className="text-center py-2 px-4 bg-gray-100 border-b font-bold border-gray-200"
              colSpan={4}
            >
              Uploaded Documents
            </td>
          </tr>
 
          {/* <tr> */}
          {/* <td className="border px-4 py-2">{formData.documentName}</td> */}
          {/* <td className="border px-4 py-2">{formData.uploadDocs}</td> */}
          {/* </tr> */}
 
          {/* {formData.uploadFiles.map((file, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{file.documentName}</td>
              <td className="border px-4 py-2">{file.file.name}</td>
            </tr>
          ))} */}
          {formData.documents.length > 0 ? (
            formData.documents.map((doc, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{doc.documentName}</td>
                <td className="border px-4 py-2 " colSpan={3}>
                  {doc.fileName}
                </td>
                {/* <td className="border px-4 py-2">
                  <a
                    href={URL.createObjectURL(doc.uploadedDoc)}
                    download={doc.uploadedDoc.name}
                    className="underline text-blue-600"
                  >
                    Download
                  </a>
                </td> */}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="border px-4 py-2 text-center">
                No documents uploaded
              </td>
            </tr>
          )}
        </tbody>
      </table>
 
      <div className="flex justify-between mt-4">
        <button
          type="button"
          className="bg-gray-500 text-white py-2 px-4 rounded-lg focus:outline-none focus:bg-gray-700"
          onClick={prevStep}
        >
          Back
        </button>
        <Link to="/SubmissionMessage">
          <button
            type="button"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </Link>
      </div>
    </div>

  );
};
 
export default Step6;
 
 
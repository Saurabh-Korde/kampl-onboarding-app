import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useWizardStore } from '../../store/wizardStore';
import { DocumentFile } from '../../store/wizardStore';

const Step5: React.FC = () => {
  const { formData, setFormData, prevStep, nextStep } = useWizardStore();
  const [selectedFiles, setSelectedFiles] = useState<DocumentFile[]>(formData.documents || []);
  const [selectedDocumentName, setSelectedDocumentName] = useState<string>('');

  const documentOptions = [
    'Resume',
    'Passport Size Photo',
    'Aadhar Card',
    'PAN Card',
    'Residence Proof',
    'Bank Passbook',
    'Cancelled Bank Check',
    '10th Certificate',
    '12th Certificate',
    'Graduation Certificate',
    'Postgraduation Certificate',
    'Diploma Certificate',
    'Degree Certificate',
    'Relieving Letter',
    'Last 2 Months Salary Slips Of Previous Company',
    'Clearance Letter From Previous Company',
    "Back Organization's Experience Certificates",
    'PF Form no 11',
    'ESIC Nomination and Declaration Form',
    'Passport/Visa',
    'Other',
  ];

  const formik = useFormik({
    initialValues: {
      documents: formData.documents || [],
    },
    onSubmit: (values) => {
      setFormData({ ...formData, documents: selectedFiles });
      nextStep();
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && selectedDocumentName) {
      const filesArray = Array.from(e.target.files);
      const filePromises = filesArray.map(async (file) => {
        const reader = new FileReader();
        return new Promise<DocumentFile>((resolve) => {
          reader.onloadend = () => {
            resolve({
              documentName: selectedDocumentName,
              document: reader.result as string, // Base64 data URL
              fileName: file.name, // Store file name
            });
          };
          reader.readAsDataURL(file);
        });
      });

      Promise.all(filePromises).then((newFiles) => {
        const updatedFiles = [...selectedFiles, ...newFiles];
        setSelectedFiles(updatedFiles);
        setFormData({ ...formData, documents: updatedFiles });
        formik.setFieldValue('documents', updatedFiles);
        // Clear input fields
        e.target.value = '';
        setSelectedDocumentName('');
      });
    }
  };

  const handleRemoveFile = (index: number) => {
    const updatedFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(updatedFiles);
    setFormData({ ...formData, documents: updatedFiles });
    formik.setFieldValue('documents', updatedFiles);
  };

  const handleViewFile = (document: string) => {
    const newWindow = window.open();
    if (newWindow) {
      newWindow.document.write(`<iframe src="${document}" frameborder="0" style="border:0; top:0; left:0; bottom:0; right:0; width:100%; height:100%;" allowfullscreen></iframe>`);
    }
  };

  return (
    <form onSubmit={formik.handleSubmit} className="p-6 bg-white rounded-md shadow-md">
      <div className="mb-4 flex items-center space-x-4">
        <div className="relative w-full lg:w-1/3 px-2">
          <label htmlFor="documentName" className="block text-sm font-medium text-gray-700">
            Document Name
          </label>
          <select
            id="documentName"
            name="documentName"
            value={selectedDocumentName}
            onChange={(e) => setSelectedDocumentName(e.target.value)}
            className="appearance-none border-2 border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="" disabled>
              Select a document type
            </option>
            {documentOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="h-4 w-4 mt-4 mr-2 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M7 10l5 5 5-5H7z" />
            </svg>
          </div>
        </div>

        <div>
          <label htmlFor="documents" className="block text-sm font-medium text-gray-700">
            Upload Document
          </label>
          <input
            id="documents"
            name="documents"
            type="file"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            multiple
            onChange={handleFileChange}
            className="border-2 border-gray-300 rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        {selectedFiles.length > 0 && (
          <div className="my-4">
            <h3 className="text-lg font-medium">Selected Documents</h3>
            <table className="min-w-full bg-white border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 border-b text-left">Document Type</th>
                  <th className="py-2 px-4 border-b text-left">File Name</th>
                  <th className="py-2 px-4 border-b text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {selectedFiles.map((file, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b">{file.documentName}</td>
                    <td className="py-2 px-4 border-b">{file.fileName}</td>
                    <td className="py-2 px-4 border-b flex space-x-2">
                      <p
                        
                        className=" text-blue-700 py-1 px-3 rounded hover:bg-blue-200 text-white-200 "
                        onClick={() => handleViewFile(file.document)}
                      >
                        View
                      </p>
                      <button
                        type="button"
                        className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700"
                        onClick={() => handleRemoveFile(index)}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={prevStep}
          className="bg-gray-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-700 focus:outline-none"
        >
          Previous
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default Step5;

import * as Yup from 'yup';

export const validationSchemaStep1 = Yup.object({
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    ,
  lastName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    ,
  middleName: Yup.string()
    .max(20, 'Must be 20 characters or less'),
  dateOfBirth: Yup.date()
    ,
  emailId: Yup.string()
    .email('Invalid email address')
    ,
  gender: Yup.string()
    ,
  mobileNumber: Yup.string()
    .matches(/^[0-9]{10}$/, 'Must be a valid 10-digit phone number')
    ,
  joiningDate: Yup.date()
    ,
  joiningDepartment: Yup.string()
    ,
  nationality: Yup.string()
    ,
  currentAddress: Yup.string()
    ,
  permanentAddress: Yup.string()
    
});


  
  export const validationSchemaStep2 = Yup.object().shape({
    qualification: Yup.string()
      .required('Qualification is required'),
    certification: Yup.string(),
    workExperience: Yup.string()
      .required('Work experience is required'),
    isExperienced: Yup.boolean(),
    
  });

  export const validationSchemaStep3 = Yup.object().shape({
    maritalStatus: Yup.string()
      .required('Marital status is required')
      .oneOf(['single', 'married', 'divorced', 'widowed'], 'Invalid marital status'),
    numberOfChildren: Yup.number()
      .min(0, 'Number of children must be a positive number')
      .integer('Number of children must be a whole number')
      .required('Number of children is required'),
    familyMembers: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required('Name is required'),
        relationship: Yup.string().required('Relationship is required'),
        emergencyContact: Yup.string().required('Emergency contact is required'),
        isEmergencyContact: Yup.boolean(),
      })
    ),
  });
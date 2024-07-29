import create from 'zustand';

interface FamilyMember {
  name: string;
  relationship: string;
  emergencyContact: string;
  isEmergencyContact: boolean;
}

export interface DocumentFile {
  documentName: string;
  document: string; // Store Base64 encoded string
  fileName: string; // File name of the uploaded document
}

interface FormData {
  firstName: string;
  lastName: string;
  middleName: string;
  dateOfBirth: string;
  emailId: string;
  gender: string;
  mobileNumber: string;
  joiningDate: string;
  joiningDepartment: string;
  address: string;
  nationality: string;
  currentAddress: string;
  permenentAddress: string;
  qualification: string;
  certification: string;
  workExperience: string;
  overAllExperience: string;
  lastEmployer: string;
  lastctc: string;
  salaryInHand: string;
  internationalWorker: any;
  originStateAndCountry: string;
  passportNumber: string;
  passportValidity: string;
  maritalStatus: string;
  numberOfChildren: string;
  familyMembers: FamilyMember[];
  documents: DocumentFile[];
  agreement: boolean;
  physicianName: string;
  physicianNumber: string;
  bloodGroup: string;
  height: string;
  weight: string;
  allergies: string;
  documentName: string;
  esic: any;
}

interface WizardState {
  step: number;
  formData: FormData;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
  setFormData: (data: Partial<FormData>) => void;
  resetForm: () => void;
}

export const useWizardStore = create<WizardState>((set) => ({
  step: 1,
  formData: {
    firstName: '',
    lastName: '',
    middleName: '',
    dateOfBirth: '',
    emailId: '',
    gender: '',
    mobileNumber: '',
    joiningDate: '',
    joiningDepartment: '',
    address: '',
    nationality: '',
    currentAddress: '',
    permenentAddress: '',
    qualification: '',
    certification: '',
    workExperience: '',
    overAllExperience: '',
    lastEmployer: '',
    lastctc: '',
    salaryInHand: '',
    internationalWorker: '',
    originStateAndCountry: '',
    passportNumber: '',
    passportValidity: '',
    maritalStatus: '',
    numberOfChildren: '',
    familyMembers: [
      {
        name: '',
        relationship: '',
        emergencyContact: '',
        isEmergencyContact: false,
      },
    ],
    documents: [],
    agreement: false,
    physicianName: '',
    physicianNumber: '',
    bloodGroup: '',
    height: '',
    weight: '',
    allergies: '',
    documentName: '',
    esic: false,
  },
  nextStep: () => set((state) => ({ ...state, step: state.step + 1 })),
  prevStep: () => set((state) => ({ ...state, step: state.step - 1 })),
  goToStep: (step) => set({ step }),
  setFormData: (data) => set((state) => ({ ...state, formData: { ...state.formData, ...data } })),
  resetForm: () => set(() => ({
    formData: {
      firstName: '',
      lastName: '',
      middleName: '',
      dateOfBirth: '',
      emailId: '',
      gender: '',
      mobileNumber: '',
      joiningDate: '',
      joiningDepartment: '',
      address: '',
      nationality: '',
      currentAddress: '',
      permenentAddress: '',
      qualification: '',
      certification: '',
      workExperience: '',
      overAllExperience: '',
      lastEmployer: '',
      lastctc: '',
      salaryInHand: '',
      internationalWorker: '',
      originStateAndCountry: '',
      passportNumber: '',
      passportValidity: '',
      maritalStatus: '',
      numberOfChildren: '',
      familyMembers: [
        {
          name: '',
          relationship: '',
          emergencyContact: '',
          isEmergencyContact: false,
        },
      ],
      documents: [],
      agreement: false,
      physicianName: '',
      physicianNumber: '',
      bloodGroup: '',
      height: '',
      weight: '',
      allergies: '',
      documentName: '',
      esic: false,
    },
  })),
}));

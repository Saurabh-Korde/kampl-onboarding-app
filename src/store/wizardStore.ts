import create from 'zustand';

interface FamilyMember {
  name: string;
  relationship: string;
  emergencyContact: string;
  isEmergencyContact: boolean; // New field
}

interface FormData {
  firstName: string;
  lastName: string;
  middleName: string;
  dateOfbirth: string;
  emailId: string;
  gender: string;
  mobileNumber: string;
  joiningDate: string;
  joiningDepartment: string;
  address: string;
  nationality: string;
  currentAddress: string;
  permenantAddress: string;
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
  familyMembers: FamilyMember[]; // Updated to include FamilyMember type
}

interface WizardState {
  step: number;
  formData: FormData;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
  setFormData: (data: Partial<FormData>) => void;
}

export const useWizardStore = create<WizardState>((set) => ({
  step: 1,
  formData: {
    firstName: '',
    lastName: '',
    middleName: '',
    dateOfbirth: '',
    emailId: '',
    gender: '',
    mobileNumber: '',
    joiningDate: '',
    joiningDepartment: '',
    address: '',
    nationality: '',
    currentAddress: '',
    permenantAddress: '',
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
  },
  nextStep: () => set((state) => ({ ...state, step: state.step + 1 })),
  prevStep: () => set((state) => ({ ...state, step: state.step - 1 })),
  goToStep: (step) => set({ step }),
  setFormData: (data) => set((state) => ({ ...state, formData: { ...state.formData, ...data } })),
}));

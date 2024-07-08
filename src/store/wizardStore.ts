import create from 'zustand';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  phone: string;
  age: number;
  comments: string;
  agreement: boolean;
  review: string;
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
    email: '',
    address: '',
    city: '',
    state: '',
    phone: '',
    age: 0,
    comments: '',
    agreement: false,
    review: '',
  },
  nextStep: () => set((state) => ({ ...state, step: state.step + 1 })),
  prevStep: () => set((state) => ({ ...state, step: state.step - 1 })),
  goToStep: (step) => set({ step }),
  setFormData: (data) => set((state) => ({ ...state, formData: { ...state.formData, ...data } })),
}));

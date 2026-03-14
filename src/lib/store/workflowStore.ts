import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WorkflowState {
    category: string;
    industry: string;
    template: string;
    features: string[];
    style: string;
    productName: string;

    setCategory: (value: string) => void;
    setIndustry: (value: string) => void;
    setTemplate: (value: string) => void;
    setFeatures: (value: string[]) => void;
    setStyle: (value: string) => void;
    setProductName: (value: string) => void;
    resetWorkflow: () => void;
}

const initialState = {
    category: "",
    industry: "",
    template: "",
    features: [],
    style: "",
    productName: "",
};

export const useWorkflowStore = create<WorkflowState>()(
    persist(
        (set) => ({
            ...initialState,
            setCategory: (value) => set({ category: value }),
            setIndustry: (value) => set({ industry: value }),
            setTemplate: (value) => set({ template: value }),
            setFeatures: (value) => set({ features: value }),
            setStyle: (value) => set({ style: value }),
            setProductName: (value: string) => set({ productName: value }),
            resetWorkflow: () => set(initialState),
        }),
        {
            name: 'workflow-storage', // Store in localStorage to persist across pages
        }
    )
);

"use client";

import { useState } from "react";
import { Check, ChevronRight, Layout, Lightbulb, Monitor, Smartphone, Briefcase, FileText, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import { useWorkflowStore } from "@/lib/store/workflowStore";

const steps = [
    "Task Information",
    "Category Selection",
    "Industry Selection",
    "Prompt Template",
    "Content Input",
    "Design Style",
    "Generate Concept",
];

const categories = [
    { id: "web", title: "Web Page", icon: Monitor },
    { id: "mobile", title: "Mobile UI", icon: Smartphone },
    { id: "dashboard", title: "Dashboard", icon: Layout },
    { id: "poster", title: "Poster", icon: ImageIcon },
    { id: "social", title: "Social Media", icon: Briefcase },
    { id: "banner", title: "Banner", icon: FileText },
];

export function TaskStepper() {
    const [currentStep, setCurrentStep] = useState(1);

    // Connect to Zustand store
    const {
        category, setCategory,
        productName, setProductName,
        style, setStyle
    } = useWorkflowStore();

    return (
        <div className="max-w-4xl mx-auto flex flex-col items-center">
            {/* Stepper Header */}
            <div className="w-full mb-10 overflow-x-auto pb-4">
                <ol className="flex items-center w-full min-w-max text-sm font-medium text-center text-neutral-500 dark:text-neutral-400">
                    {steps.map((step, idx) => {
                        const stepNum = idx + 1;
                        const isCompleted = stepNum < currentStep;
                        const isActive = stepNum === currentStep;

                        return (
                            <li
                                key={idx}
                                className={`flex items-center ${idx !== steps.length - 1 ? "w-full" : ""
                                    } ${isActive
                                        ? "text-brand-500"
                                        : isCompleted
                                            ? "text-neutral-900 dark:text-neutral-200"
                                            : "text-neutral-400 dark:text-neutral-600"
                                    }`}
                            >
                                <div className="flex items-center justify-center shrink-0">
                                    <div
                                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs border-2 ${isActive
                                            ? "border-brand-500 bg-brand-50 dark:bg-brand-900/20 text-brand-500"
                                            : isCompleted
                                                ? "border-neutral-900 dark:border-neutral-200 bg-neutral-900 dark:bg-neutral-200 text-white dark:text-neutral-900"
                                                : "border-neutral-200 dark:border-neutral-800 bg-transparent text-neutral-400 dark:text-neutral-600"
                                            }`}
                                    >
                                        {isCompleted ? <Check className="w-4 h-4" /> : stepNum}
                                    </div>
                                    <span className="ml-3 hidden sm:inline whitespace-nowrap">{step}</span>
                                </div>
                                {idx !== steps.length - 1 && (
                                    <div
                                        className={`flex-1 h-px mx-4 ${isCompleted ? "bg-neutral-900 dark:bg-neutral-200" : "bg-neutral-200 dark:bg-neutral-800"
                                            }`}
                                    ></div>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </div>

            {/* Step Content Container */}
            <div className="w-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-soft p-8 min-h-[400px]">

                {currentStep === 1 && (
                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">Task Information</h2>
                        <div className="space-y-5 text-sm">
                            <div className="space-y-1.5">
                                <label className="font-medium text-neutral-700 dark:text-neutral-300">Task Title</label>
                                <input
                                    type="text"
                                    value={productName}
                                    onChange={(e) => setProductName(e.target.value)}
                                    placeholder="e.g. Modern SaaS Landing Page"
                                    className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500/50"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="font-medium text-neutral-700 dark:text-neutral-300">Task Description</label>
                                <textarea
                                    placeholder="Briefly describe the task objective..."
                                    rows={4}
                                    className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500/50 resize-none"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-5">
                                <div className="space-y-1.5">
                                    <label className="font-medium text-neutral-700 dark:text-neutral-300">Deadline</label>
                                    <input
                                        type="date"
                                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500/50"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="font-medium text-neutral-700 dark:text-neutral-300">Priority</label>
                                    <select className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500/50 appearance-none">
                                        <option>Low</option>
                                        <option>Medium</option>
                                        <option>High</option>
                                        <option>Urgent</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {currentStep === 2 && (
                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">Select Category</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {categories.map((cat) => {
                                const isSelected = category === cat.id;
                                return (
                                    <div
                                        key={cat.id}
                                        onClick={() => setCategory(cat.id)}
                                        className={`cursor-pointer group flex flex-col items-center justify-center p-6 rounded-xl border-2 transition-all duration-200 ${isSelected
                                            ? "border-brand-500 bg-brand-50 dark:bg-brand-900/10 text-brand-600 dark:text-brand-400"
                                            : "border-neutral-200 dark:border-neutral-800 bg-transparent text-neutral-600 dark:text-neutral-400 hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
                                            }`}
                                    >
                                        <cat.icon className={`w-8 h-8 mb-3 transition-transform group-hover:scale-110 ${isSelected ? "text-brand-500" : ""}`} />
                                        <span className="font-medium text-sm">{cat.title}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {currentStep > 2 && currentStep < 7 && (
                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 flex flex-col items-center justify-center py-12 text-center text-neutral-500">
                        <div className="w-16 h-16 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mb-4">
                            <span className="text-neutral-400 font-medium">Step {currentStep}</span>
                        </div>
                        {currentStep === 6 && (
                            <div className="w-full max-w-md mt-4 text-left">
                                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Design Style Keywords</label>
                                <input
                                    type="text"
                                    value={style}
                                    onChange={(e) => setStyle(e.target.value)}
                                    placeholder="e.g. Clean, Dark mode, Enterprise"
                                    className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500/50"
                                />
                            </div>
                        )}
                        <p className="mt-4">This is a simplified view of Step {currentStep}.</p>
                        <p className="text-sm">Click "Continue" to proceed to the next step.</p>
                    </div>
                )}

                {currentStep === 7 && (
                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 flex flex-col items-center justify-center py-12 text-center">
                        <div className="w-20 h-20 bg-brand-50 dark:bg-brand-900/20 rounded-full flex items-center justify-center mb-6">
                            <Lightbulb className="w-10 h-10 text-brand-500" />
                        </div>
                        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">Ready to Generate Concept</h2>
                        <p className="text-neutral-500 dark:text-neutral-400 mb-8 max-w-md mx-auto">
                            Your workflow is completely set up. AI will now generate a complete prompt and design concept based on your inputs.
                        </p>
                        <Link
                            href="/concept"
                            className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-3 rounded-xl font-medium shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                        >
                            Generate AI Concept <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                )}

                {/* Footer Actions */}
                <div className="mt-10 pt-6 border-t border-neutral-200 dark:border-neutral-800 flex justify-between items-center">
                    <button
                        onClick={() => setCurrentStep((p) => Math.max(1, p - 1))}
                        disabled={currentStep === 1}
                        className="px-5 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        Back
                    </button>

                    {currentStep < 7 && (
                        <button
                            onClick={() => setCurrentStep((p) => p + 1)}
                            className="px-6 py-2.5 bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg text-sm font-medium shadow-sm transition-colors flex items-center gap-2"
                        >
                            Continue
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

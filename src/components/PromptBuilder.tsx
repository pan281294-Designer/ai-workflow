"use client";

import { Download, Edit3, Image, Layout, Settings2, Sparkles, Loader2 } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useWorkflowStore } from "@/lib/store/workflowStore";

export function PromptBuilder() {
    const router = useRouter();
    const [isGenerating, setIsGenerating] = useState(false);

    const {
        productName, setProductName,
        style, setStyle,
        category, industry, template, features
    } = useWorkflowStore();

    // Local state for builder-specific fields not in main workflow
    const [localData, setLocalData] = useState({
        headline: "Secure your enterprise cloud infrastructure in minutes.",
        targetAudience: "CISO & IT Admins",
        cta: "Start Free Trial",
    });

    // Formatting features array to string for the textarea
    const featuresText = features.join('\\n');
    const updateFeatures = (text: string) => {
        useWorkflowStore.getState().setFeatures(text.split('\\n').filter(Boolean));
    };

    const handleGenerate = async () => {
        setIsGenerating(true);
        try {
            const fullWorkflowState = {
                productName,
                style,
                category,
                industry,
                template,
                features: features.join(', '), // Convert array to comma string for prompt
                headline: localData.headline,
                targetAudience: localData.targetAudience,
                cta: localData.cta,
            };

            const response = await fetch('/api/generate/concept', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(fullWorkflowState)
            });

            if (!response.ok) throw new Error('API Generate Failed');

            const data = await response.json();

            // Store response in session storage to pass to ConceptViewer
            sessionStorage.setItem('generatedConcept', JSON.stringify(data));

            router.push('/concept');
        } catch (error) {
            console.error(error);
            alert("Failed to generate concept. Please check your API key.");
        } finally {
            setIsGenerating(false);
        }
    };

    const handleLocalChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setLocalData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };
    return (
        <div className="flex h-full min-h-[600px] border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden bg-white dark:bg-neutral-900 shadow-soft">
            {/* Left Panel: Edit Fields */}
            <div className="w-1/2 flex flex-col border-r border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50">
                <div className="p-6 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 sticky top-0 z-10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Settings2 className="w-5 h-5 text-neutral-500" />
                        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">Prompt Configuration</h2>
                    </div>
                </div>

                <div className="flex-1 p-6 overflow-y-auto space-y-5">
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Product Name</label>
                        <input
                            type="text"
                            name="productName"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500/50"
                        />
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Headline</label>
                        <textarea
                            name="headline"
                            value={localData.headline}
                            onChange={handleLocalChange}
                            rows={2}
                            className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500/50 resize-none"
                        />
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Features</label>
                        <textarea
                            name="features"
                            value={featuresText}
                            onChange={(e) => updateFeatures(e.target.value)}
                            rows={3}
                            className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500/50 resize-none"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Target Audience</label>
                            <input
                                type="text"
                                name="targetAudience"
                                value={localData.targetAudience}
                                onChange={handleLocalChange}
                                className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500/50"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">CTA text</label>
                            <input
                                type="text"
                                name="cta"
                                value={localData.cta}
                                onChange={handleLocalChange}
                                className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500/50"
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Design Style</label>
                        <input
                            type="text"
                            name="style"
                            value={style}
                            onChange={(e) => setStyle(e.target.value)}
                            className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500/50"
                        />
                    </div>
                </div>
            </div>

            {/* Right Panel: Live Preview */}
            <div className="w-1/2 flex flex-col bg-neutral-900 text-neutral-100">
                <div className="p-6 border-b border-neutral-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-brand-400" />
                        <h2 className="text-lg font-semibold text-white">Live Prompt Preview</h2>
                    </div>
                    <div className="text-xs font-medium px-2 py-1 bg-brand-900/50 text-brand-300 rounded border border-brand-800/50">
                        Auto-syncing
                    </div>
                </div>

                <div className="flex-1 p-6 overflow-y-auto space-y-6">
                    <div className="font-mono text-sm leading-relaxed space-y-4 text-neutral-300 border border-neutral-800 rounded-lg p-5 bg-neutral-950/50 shadow-inner">
                        <p>
                            Create a modern cybersecurity SaaS landing page for <span className="text-brand-400 font-semibold bg-brand-900/30 px-1 rounded">{productName}</span>.
                        </p>
                        <div>
                            <p className="text-neutral-500 font-semibold mb-1">Sections:</p>
                            <ul className="list-disc pl-5 space-y-1 text-white">
                                <li>Hero: <span className="text-neutral-400">{localData.headline}</span></li>
                                <li>Features: <span className="text-neutral-400">{features.join(', ')}</span></li>
                                <li>Testimonials</li>
                                <li>CTA: <span className="text-neutral-400">{localData.cta}</span></li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-neutral-500 font-semibold mb-1">Target Audience:</p>
                            <p className="text-white">{localData.targetAudience}</p>
                        </div>
                        <div>
                            <p className="text-neutral-500 font-semibold mb-1">Style:</p>
                            <p className="text-white">Clean enterprise UI with card-based layout and soft shadows. Style keywords: {style}.</p>
                        </div>
                    </div>
                </div>

                <div className="p-4 border-t border-neutral-800 bg-neutral-950 flex items-center justify-between">
                    <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors">
                        <Download className="w-4 h-4" /> Save Template
                    </button>
                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors border border-neutral-700">
                            <Edit3 className="w-4 h-4" /> Edit Prompt
                        </button>
                        <button
                            onClick={handleGenerate}
                            disabled={isGenerating}
                            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-brand-600 hover:bg-brand-500 disabled:bg-brand-800 disabled:cursor-not-allowed rounded-lg transition-colors shadow-[0_0_15px_rgba(74,92,255,0.4)]"
                        >
                            {isGenerating ? (
                                <><Loader2 className="w-4 h-4 animate-spin" /> Generating...</>
                            ) : (
                                <><Image className="w-4 h-4" /> Generate Concept</>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

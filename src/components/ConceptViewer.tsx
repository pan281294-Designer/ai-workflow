"use client";

import { BoxSelect, Code2, Download, Edit3, Layout, MessageSquareText, RefreshCcw, Send, Sparkles } from "lucide-react";
import Link from "next/link";
import { PromptBuilder } from "./PromptBuilder";
import { useState, useEffect } from "react";

export function ConceptViewer() {
    const [showPromptBuilder, setShowPromptBuilder] = useState(false);
    const [conceptData, setConceptData] = useState<any>(null);

    useEffect(() => {
        const stored = sessionStorage.getItem('generatedConcept');
        if (stored) {
            setConceptData(JSON.parse(stored));
        }
    }, []);

    if (showPromptBuilder) {
        return (
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-neutral-900 dark:text-white">Refine Prompt</h2>
                    <button
                        onClick={() => setShowPromptBuilder(false)}
                        className="text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
                    >
                        Cancel
                    </button>
                </div>
                <PromptBuilder />
            </div>
        );
    }

    return (
        <div className="flex flex-col lg:flex-row gap-8 min-h-[600px]">
            {/* Left Column: Visual Concept */}
            <div className="w-full lg:w-2/3 flex flex-col gap-6">
                <div className="border border-neutral-200 dark:border-neutral-800 rounded-2xl bg-neutral-100 dark:bg-neutral-900/50 p-6 flex flex-col items-center justify-center min-h-[400px] shadow-inner relative overflow-hidden group">
                    <div className="absolute top-4 left-4 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 px-3 py-1.5 rounded-lg shadow-sm font-medium text-xs text-neutral-700 dark:text-neutral-300 flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-brand-500" /> V1.0 - Auto Layout
                    </div>

                    <div className="w-full h-full max-w-2xl bg-white dark:bg-neutral-950 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-800 overflow-hidden">
                        {/* Mock Header */}
                        <div className="h-14 border-b border-neutral-100 dark:border-neutral-800 flex items-center px-6 justify-between">
                            <div className="w-8 h-8 bg-brand-500 rounded-md"></div>
                            <div className="flex gap-4">
                                <div className="w-16 h-4 bg-neutral-200 dark:bg-neutral-800 rounded"></div>
                                <div className="w-16 h-4 bg-neutral-200 dark:bg-neutral-800 rounded"></div>
                                <div className="w-16 h-4 bg-neutral-200 dark:bg-neutral-800 rounded"></div>
                            </div>
                            <div className="w-24 h-8 bg-neutral-900 dark:bg-neutral-200 rounded-md"></div>
                        </div>

                        {/* Mock Hero */}
                        <div className="p-10 flex flex-col items-center justify-center text-center space-y-6">
                            <div className="w-3/4 h-12 bg-neutral-200 dark:bg-neutral-800 rounded-lg"></div>
                            <div className="w-1/2 h-4 bg-neutral-100 dark:bg-neutral-800/50 rounded"></div>
                            <div className="w-1/2 h-4 bg-neutral-100 dark:bg-neutral-800/50 rounded mx-auto mt-2"></div>
                            <div className="flex gap-4 mt-6">
                                <div className="w-32 h-10 bg-brand-500 rounded-lg"></div>
                                <div className="w-32 h-10 bg-neutral-100 dark:bg-neutral-800 rounded-lg"></div>
                            </div>
                        </div>

                        {/* Mock Features */}
                        <div className="px-10 py-12 bg-neutral-50 dark:bg-neutral-900/50 grid grid-cols-3 gap-6">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-5 rounded-xl shadow-sm">
                                    <div className="w-10 h-10 bg-brand-100 dark:bg-brand-900/30 rounded-lg mb-4"></div>
                                    <div className="w-3/4 h-4 bg-neutral-200 dark:bg-neutral-800 rounded mb-2"></div>
                                    <div className="w-full h-3 bg-neutral-100 dark:bg-neutral-800/50 rounded"></div>
                                    <div className="w-2/3 h-3 bg-neutral-100 dark:bg-neutral-800/50 rounded mt-2"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="absolute inset-0 bg-neutral-900/5 dark:bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                        <div className="bg-white dark:bg-neutral-900 shadow-xl rounded-full px-6 py-3 font-semibold text-neutral-900 dark:text-white flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                            <Code2 className="w-5 h-5 text-brand-500" />
                            View Code
                        </div>
                    </div>
                </div>

                {/* Action Bar */}
                <div className="flex items-center justify-between border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-xl p-4 shadow-soft">
                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-lg text-sm font-medium transition-colors">
                            <RefreshCcw className="w-4 h-4" /> Regenerate
                        </button>
                        <button
                            onClick={() => setShowPromptBuilder(true)}
                            className="flex items-center gap-2 px-4 py-2 border border-neutral-200 dark:border-neutral-700 hover:border-brand-500 dark:hover:border-brand-500 text-neutral-700 dark:text-neutral-300 hover:text-brand-600 dark:hover:text-brand-400 rounded-lg text-sm font-medium transition-colors"
                        >
                            <Edit3 className="w-4 h-4" /> Edit Prompt
                        </button>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 p-2 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors" aria-label="Export">
                            <Download className="w-5 h-5" />
                        </button>
                        <div className="w-px h-6 bg-neutral-200 dark:bg-neutral-800"></div>
                        <Link
                            href="/review"
                            className="flex items-center gap-2 px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg text-sm font-medium shadow-sm transition-colors"
                        >
                            <Send className="w-4 h-4" /> Send to Review
                        </Link>
                    </div>
                </div>
            </div>

            {/* Right Column: Details & Insights */}
            <div className="w-full lg:w-1/3 space-y-6">
                <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-900 shadow-soft overflow-hidden">
                    <div className="p-4 border-b border-neutral-200 dark:border-neutral-800 flex items-center gap-2">
                        <MessageSquareText className="w-4 h-4 text-neutral-500" />
                        <h3 className="font-semibold text-neutral-900 dark:text-white text-sm">Compiled Prompt</h3>
                    </div>
                    <div className="p-4 bg-neutral-50 dark:bg-neutral-900/50">
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-mono whitespace-pre-wrap">
                            {conceptData?.compiledPrompt || "Create a modern cybersecurity SaaS landing page. Clean enterprise UI with card-based layout and soft shadows. Midnight Blue & Neon Green accents."}
                        </p>
                    </div>
                </div>

                <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-900 shadow-soft overflow-hidden">
                    <div className="p-4 border-b border-neutral-200 dark:border-neutral-800 flex items-center gap-2">
                        <Layout className="w-4 h-4 text-neutral-500" />
                        <h3 className="font-semibold text-neutral-900 dark:text-white text-sm">Layout Structure</h3>
                    </div>
                    <div className="p-4">
                        <ul className="space-y-3">
                            {(conceptData?.layoutStructure || ['Hero Section', 'Features Grid', 'Testimonials', 'Footer CTA']).map((item: string, i: number) => (
                                <li key={i} className="flex items-center gap-3 text-sm">
                                    <div className="w-6 h-6 rounded bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-xs font-medium text-neutral-500 shrink-0">
                                        {i + 1}
                                    </div>
                                    <span className="text-neutral-700 dark:text-neutral-300 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-900 shadow-soft overflow-hidden">
                    <div className="p-4 border-b border-neutral-200 dark:border-neutral-800 flex items-center gap-2">
                        <BoxSelect className="w-4 h-4 text-neutral-500" />
                        <h3 className="font-semibold text-neutral-900 dark:text-white text-sm">Component Breakdown</h3>
                    </div>
                    <div className="p-4">
                        <div className="flex flex-wrap gap-2">
                            {(conceptData?.components || ['Navbar', 'ButtonPrimary', 'ButtonSecondary', 'FeatureCard', 'TestimonialCard', 'Footer']).map((item: string, i: number) => (
                                <span key={i} className="px-2.5 py-1 rounded text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border border-brand-100 dark:border-brand-900/50 rounded-xl bg-brand-50/50 dark:bg-brand-950/20 shadow-sm overflow-hidden p-5">
                    <h3 className="font-semibold text-brand-700 dark:text-brand-300 text-sm mb-2 flex items-center gap-2">
                        <Sparkles className="w-4 h-4" /> Design Notes
                    </h3>
                    <p className="text-sm text-brand-600/80 dark:text-brand-400/80 leading-relaxed whitespace-pre-wrap">
                        {conceptData?.designNotes || "The layout utilizes a 12-column grid system with 24px gutters. Typography hierarchy heavily favors bold sans-serif specific to modern developer tools. Contrast ratio passes AA standards."}
                    </p>
                </div>
            </div>
        </div>
    );
}

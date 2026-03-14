"use client";

import { Box, FileText, Layout, Monitor, Smartphone, Video } from "lucide-react";
import { useState } from "react";

const categories = [
    { id: "all", name: "All Templates" },
    { id: "landing", name: "Landing Pages", icon: Monitor },
    { id: "mobile", name: "Mobile UI", icon: Smartphone },
    { id: "dashboard", name: "Dashboards", icon: Layout },
    { id: "poster", name: "Posters", icon: FileText },
    { id: "social", name: "Social Media", icon: Video },
    { id: "ads", name: "Ads", icon: Box },
];

const templates = [
    { id: 1, name: "SaaS Dark Mode Landing Page", category: "landing", image: "bg-brand-900" },
    { id: 2, name: "Fintech Dashboard Overview", category: "dashboard", image: "bg-blue-900" },
    { id: 3, name: "E-commerce Product Detail", category: "mobile", image: "bg-purple-900" },
    { id: 4, name: "Cybersecurity Hero Section", category: "landing", image: "bg-slate-900" },
    { id: 5, name: "Analytics Chart Widget", category: "dashboard", image: "bg-emerald-900" },
    { id: 6, name: "Event Promotional Poster", category: "poster", image: "bg-rose-900" },
    { id: 7, name: "Instagram Story Ad", category: "social", image: "bg-amber-900" },
    { id: 8, name: "Google Display Ad 300x250", category: "ads", image: "bg-indigo-900" },
];

export default function TemplatesPage() {
    const [activeTab, setActiveTab] = useState("all");

    const filteredTemplates = activeTab === "all"
        ? templates
        : templates.filter(t => t.category === activeTab);

    return (
        <div className="flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-500">
            <header className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-neutral-900 dark:text-white tracking-tight">Prompt Templates</h1>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm mt-1">Browse and use community or saved prompt templates for your next project.</p>
                </div>
            </header>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-8 border-b border-neutral-200 dark:border-neutral-800 pb-4">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveTab(cat.id)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === cat.id
                                ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-sm"
                                : "bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
                            }`}
                    >
                        <div className="flex items-center gap-2">
                            {cat.icon && <cat.icon className="w-4 h-4" />}
                            {cat.name}
                        </div>
                    </button>
                ))}
            </div>

            {/* Template Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-10">
                {filteredTemplates.map((template) => (
                    <div
                        key={template.id}
                        className="group flex flex-col bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-soft transition-all hover:shadow-lg hover:border-brand-500/50 cursor-pointer"
                    >
                        <div className={`h-40 ${template.image} relative overflow-hidden flex items-center justify-center p-4`}>
                            <div className="w-full h-full border border-white/20 rounded shadow-sm bg-white/10 backdrop-blur-sm flex items-center justify-center">
                                <Layout className="w-8 h-8 text-white/50" />
                            </div>
                            <div className="absolute inset-0 bg-neutral-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button className="px-4 py-2 bg-white text-neutral-900 font-medium text-sm rounded-lg shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                    Preview Template
                                </button>
                            </div>
                        </div>

                        <div className="p-5 flex flex-col flex-1">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="font-semibold text-neutral-900 dark:text-white line-clamp-2 leading-tight">
                                    {template.name}
                                </h3>
                                <span className="text-[10px] font-bold tracking-wider uppercase text-neutral-500 bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded shrink-0">
                                    {template.category}
                                </span>
                            </div>

                            <div className="mt-auto pt-4 border-t border-neutral-100 dark:border-neutral-800 flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-brand-100 dark:bg-brand-900/50 flex items-center justify-center">
                                        <span className="text-[10px] font-bold text-brand-600 dark:text-brand-400">DA</span>
                                    </div>
                                    <span className="text-xs text-neutral-500">by DesignAuto</span>
                                </div>

                                <button className="text-sm font-medium text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300">
                                    Use Template →
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

"use client";

import { CheckCircle2, Clock, Lightbulb, PlayCircle, Star, TrendingUp, Sparkles, Loader2, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useWorkflowStore } from "@/lib/store/workflowStore";
import { useRouter } from "next/navigation";

export function DashboardCards() {
    const stats = [
        { title: "Active Tasks", value: "12", change: "+2 from last week", icon: PlayCircle, color: "text-blue-500" },
        { title: "Generated Concepts", value: "84", change: "+14 from last week", icon: Lightbulb, color: "text-amber-500" },
        { title: "Pending Reviews", value: "5", change: "-2 from last week", icon: Clock, color: "text-purple-500" },
        { title: "Approved Designs", value: "128", change: "+8 from last week", icon: CheckCircle2, color: "text-green-500" },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, i) => (
                <div key={i} className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-soft">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">{stat.title}</h3>
                        <div className={`p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 ${stat.color}`}>
                            <stat.icon className="w-4 h-4" />
                        </div>
                    </div>
                    <p className="text-3xl font-semibold text-neutral-900 dark:text-white mb-1">{stat.value}</p>
                    <div className="flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400">
                        <TrendingUp className="w-3 h-3 text-green-500" />
                        <span>{stat.change}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export function RecentProjects() {
    const projects = [
        { name: "Fintech Dashboard Rethink", category: "Dashboard", status: "In Review", date: "2 hrs ago", statusColor: "text-purple-600 bg-purple-100 dark:bg-purple-900/30" },
        { name: "Spring Campaign Assets", category: "Social Media", status: "Generating", date: "5 hrs ago", statusColor: "text-blue-600 bg-blue-100 dark:bg-blue-900/30" },
        { name: "E-commerce App Redesign", category: "Mobile UI", status: "Approved", date: "1 day ago", statusColor: "text-green-600 bg-green-100 dark:bg-green-900/30" },
        { name: "SaaS Landing Page", category: "Web Page", status: "Draft", date: "2 days ago", statusColor: "text-neutral-600 bg-neutral-100 dark:bg-neutral-800" },
    ];

    return (
        <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-soft overflow-hidden">
            <div className="px-6 py-5 border-b border-neutral-200 dark:border-neutral-800">
                <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">Recent Projects</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-neutral-500 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-800/50 uppercase">
                        <tr>
                            <th className="px-6 py-3 font-medium">Project Name</th>
                            <th className="px-6 py-3 font-medium">Category</th>
                            <th className="px-6 py-3 font-medium">Status</th>
                            <th className="px-6 py-3 font-medium">Last Updated</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                        {projects.map((project, i) => (
                            <tr key={i} className="hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors">
                                <td className="px-6 py-4 font-medium text-neutral-900 dark:text-white">{project.name}</td>
                                <td className="px-6 py-4 text-neutral-600 dark:text-neutral-400">{project.category}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${project.statusColor}`}>
                                        {project.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-neutral-500 dark:text-neutral-400">{project.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export function ActivityPanel() {
    const router = useRouter();
    const setCategory = useWorkflowStore((state) => state.setCategory);
    const setIndustry = useWorkflowStore((state) => state.setIndustry);
    const setStyle = useWorkflowStore((state) => state.setStyle);
    const setProductName = useWorkflowStore((state) => state.setProductName);

    const [suggestions, setSuggestions] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchSuggestions = async () => {
            try {
                const res = await fetch('/api/suggestions');
                if (!res.ok) throw new Error("Failed to fetch");
                const data = await res.json();
                setSuggestions(data.suggestions || []);
            } catch (err) {
                console.error("AI Suggestions error:", err);
            } finally {
                setIsLoading(false);
            }
        };
        fetchSuggestions();
    }, []);

    const handleSuggestionClick = (suggestion: any) => {
        setCategory(suggestion.category || 'web');
        setIndustry(suggestion.industry || 'Tech');
        setStyle(suggestion.style || 'Clean and modern');
        setProductName(suggestion.title || 'New Project');
        router.push('/new-task');
    };

    return (
        <div className="space-y-6">
            <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-brand-50 to-white dark:from-brand-950/20 dark:to-neutral-900 shadow-soft">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-brand-500 fill-brand-500" />
                        <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">AI Suggestions</h3>
                    </div>
                </div>

                {isLoading ? (
                    <div className="flex flex-col items-center justify-center py-8 opacity-70">
                        <Loader2 className="w-5 h-5 text-brand-500 animate-spin mb-3" />
                        <span className="text-xs font-medium text-neutral-500">Generating contextual ideas...</span>
                    </div>
                ) : suggestions.length > 0 ? (
                    <div className="space-y-3">
                        {suggestions.map((suggestion, i) => (
                            <div
                                key={i}
                                onClick={() => handleSuggestionClick(suggestion)}
                                className="group p-3 rounded-lg bg-white dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 cursor-pointer hover:border-brand-500 hover:shadow-sm transition-all text-left block w-full"
                            >
                                <h4 className="text-xs font-bold text-neutral-900 dark:text-white mb-1 group-hover:text-brand-500 transition-colors">
                                    {suggestion.title}
                                </h4>
                                <p className="text-[11px] text-neutral-600 dark:text-neutral-400 leading-relaxed mb-2 line-clamp-2">
                                    {suggestion.description}
                                </p>
                                <div className="flex items-center justify-between mt-2 pt-2 border-t border-neutral-100 dark:border-neutral-700/50">
                                    <div className="flex items-center gap-1.5 overflow-hidden">
                                        <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 whitespace-nowrap">
                                            {suggestion.category}
                                        </span>
                                        <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 whitespace-nowrap truncate">
                                            {suggestion.industry}
                                        </span>
                                    </div>
                                    <ArrowRight className="w-3 h-3 text-neutral-400 group-hover:text-brand-500 group-hover:translate-x-0.5 transition-all shrink-0" />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-sm text-neutral-500 pb-2">No suggestions available right now.</p>
                )}
            </div>

            <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-soft">
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4">Recent Prompts</h3>
                <div className="space-y-4">
                    {[
                        "Dark mode crypto exchange dashboard with neo-brutalism elements",
                        "Minimalist plant store mobile app UI",
                        "High-converting SaaS pricing page with 3 tiers"
                    ].map((prompt, i) => (
                        <div key={i} className="group p-3 rounded-lg bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800 cursor-pointer hover:border-brand-500/50 transition-all">
                            <p className="text-sm text-neutral-700 dark:text-neutral-300 line-clamp-2">{prompt}</p>
                            <div className="mt-2 flex items-center justify-between text-xs text-neutral-500">
                                <span>{i + 1} hr ago</span>
                                <span className="opacity-0 group-hover:opacity-100 text-brand-500 font-medium transition-opacity">Reuse Prompt →</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

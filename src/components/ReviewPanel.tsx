"use client";

import { Check, Edit2, MessageSquare, Send, ThumbsUp, X } from "lucide-react";

export function ReviewPanel() {
    return (
        <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-140px)] min-h-[600px]">
            {/* Left Panel: Concept Preview */}
            <div className="w-full lg:w-2/3 flex flex-col border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-900/50 shadow-inner relative group">
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm font-medium text-xs text-neutral-700 dark:text-neutral-300 z-10 border border-neutral-200 dark:border-neutral-700">
                    V1.0 Draft
                </div>

                <div className="w-full h-full flex flex-col p-8 overflow-y-auto">
                    {/* Mock Document Render */}
                    <div className="w-full max-w-2xl mx-auto bg-white dark:bg-neutral-950 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-800 flex-1 min-h-[800px] relative">
                        {/* Hotspot 1 */}
                        <div className="absolute top-[150px] left-[150px] w-6 h-6 bg-brand-500 rounded-full border-2 border-white dark:border-neutral-900 shadow-md flex items-center justify-center text-white text-xs font-bold cursor-pointer hover:scale-110 transition-transform z-20">
                            1
                        </div>

                        <div className="h-16 border-b border-neutral-100 dark:border-neutral-800 flex items-center px-8 justify-between">
                            <div className="w-10 h-10 bg-brand-500 rounded-lg"></div>
                            <div className="flex gap-6">
                                <div className="w-16 h-4 bg-neutral-200 dark:bg-neutral-800 rounded-md"></div>
                                <div className="w-16 h-4 bg-neutral-200 dark:bg-neutral-800 rounded-md"></div>
                                <div className="w-16 h-4 bg-brand-100 dark:bg-brand-900/30 rounded-md"></div>
                            </div>
                        </div>

                        <div className="p-12 text-center space-y-8 flex flex-col items-center">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-sm font-semibold mb-2">New Release V2.0</div>
                            <div className="w-5/6 h-16 bg-neutral-200 dark:bg-neutral-800 rounded-xl"></div>
                            <div className="w-1/2 h-5 bg-neutral-100 dark:bg-neutral-800/50 rounded-md"></div>
                            <div className="w-1/3 h-5 bg-neutral-100 dark:bg-neutral-800/50 rounded-md"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Panel: Comments & Actions */}
            <div className="w-full lg:w-1/3 flex flex-col border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden bg-white dark:bg-neutral-900 shadow-soft">

                {/* Header Actions */}
                <div className="p-5 border-b border-neutral-200 dark:border-neutral-800 flex items-center gap-2 overflow-x-auto">
                    <button className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-red-50 hover:bg-red-100 dark:bg-red-900/20 dark:hover:bg-red-900/30 text-red-600 dark:text-red-400 font-medium rounded-lg text-sm transition-colors whitespace-nowrap border border-red-200 dark:border-red-900/50">
                        <X className="w-4 h-4" /> Request Changes
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-lg text-sm transition-colors whitespace-nowrap shadow-[0_0_15px_rgba(74,92,255,0.3)]">
                        <Check className="w-4 h-4" /> Approve
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-neutral-200 dark:border-neutral-800 px-5 gap-6">
                    <button className="py-3 font-semibold text-sm border-b-2 border-brand-500 text-neutral-900 dark:text-white pb-2.5 translate-y-[1px]">Comments (3)</button>
                    <button className="py-3 font-medium text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300">Review Notes</button>
                </div>

                {/* Comments Thread */}
                <div className="flex-1 overflow-y-auto p-5 space-y-6">
                    <div className="space-y-4">
                        <div className="flex gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xs font-bold leading-none shrink-0">
                                JD
                            </div>
                            <div>
                                <div className="flex items-baseline gap-2 mb-1">
                                    <span className="font-semibold text-sm text-neutral-900 dark:text-white">Jane Designer</span>
                                    <span className="text-xs text-neutral-500">2 hrs ago</span>
                                </div>
                                <div className="p-3 bg-neutral-100 dark:bg-neutral-800 rounded-lg rounded-tl-none text-sm text-neutral-700 dark:text-neutral-300">
                                    <div className="flex items-center gap-1.5 mb-2 font-medium text-xs text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/20 px-2 py-0.5 rounded w-fit">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div> Hotspot 1
                                    </div>
                                    Can we increase the contrast on the secondary CTAs? They blend into the background slightly.
                                </div>
                                <div className="flex gap-3 mt-2">
                                    <button className="text-xs font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-white">Reply</button>
                                    <button className="flex items-center gap-1 text-xs font-medium text-neutral-500 hover:text-brand-500">
                                        <ThumbsUp className="w-3 h-3" /> 1
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-3 ml-11">
                            <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center text-green-600 dark:text-green-400 text-[10px] font-bold leading-none shrink-0">
                                AI
                            </div>
                            <div>
                                <div className="flex items-baseline gap-2 mb-1">
                                    <span className="font-semibold text-sm text-neutral-900 dark:text-white">Design Bot</span>
                                    <span className="text-xs text-neutral-500">1 hr ago</span>
                                </div>
                                <div className="p-3 border border-neutral-200 dark:border-neutral-700 rounded-lg rounded-tl-none text-sm text-neutral-700 dark:text-neutral-300 relative">
                                    I've generated a variation with higher contrast buttons (Slate-800 instead of Slate-200).
                                    <button className="block w-full py-1.5 mt-2 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded font-medium text-xs text-brand-500">
                                        View Variation
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Comment Input */}
                <div className="p-4 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50">
                    <div className="relative">
                        <textarea
                            placeholder="Add a comment or feedback..."
                            rows={3}
                            className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500/50 resize-none pb-12"
                        />
                        <div className="absolute bottom-2 right-2 flex gap-2">
                            <button className="p-2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors">
                                <Edit2 className="w-4 h-4" />
                            </button>
                            <button className="flex items-center justify-center p-2 bg-brand-500 hover:bg-brand-600 text-white rounded-lg transition-colors">
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Finalize Button */}
                <div className="p-4 pt-0 border-t-0 bg-neutral-50 dark:bg-neutral-900/50">
                    <button className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-900 font-medium rounded-xl text-sm transition-colors shadow-sm">
                        Finalize Design
                    </button>
                </div>
            </div>
        </div>
    );
}

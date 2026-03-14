import { ReviewPanel } from "@/components/ReviewPanel";

export default function ReviewPage() {
    return (
        <div className="flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-500">
            <header className="mb-8 border-b border-neutral-200 dark:border-neutral-800 pb-5 flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-neutral-900 dark:text-white tracking-tight">Design Review</h1>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm mt-1">Collaborate on the generated concept, add notes, and approve the final result.</p>
                </div>
                <div className="flex items-center gap-2">
                    {['JD', 'SD', 'AI'].map((initial, i) => (
                        <div
                            key={initial}
                            className={`w-8 h-8 rounded-full border-2 border-white dark:border-neutral-900 flex items-center justify-center text-xs font-bold -ml-3 first:ml-0 z-[${30 - i}] text-white ${i === 0 ? 'bg-blue-500' : i === 1 ? 'bg-purple-500' : 'bg-green-500'
                                }`}
                        >
                            {initial}
                        </div>
                    ))}
                    <div className="w-8 h-8 rounded-full border-2 border-dashed border-neutral-300 dark:border-neutral-700 -ml-3 flex items-center justify-center text-neutral-400 hover:text-brand-500 cursor-pointer">
                        +
                    </div>
                </div>
            </header>

            <div className="flex-1 pb-10">
                <ReviewPanel />
            </div>
        </div>
    );
}

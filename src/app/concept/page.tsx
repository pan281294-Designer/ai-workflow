import { ConceptViewer } from "@/components/ConceptViewer";

export default function ConceptPage() {
    return (
        <div className="flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-500">
            <header className="mb-8 border-b border-neutral-200 dark:border-neutral-800 pb-5">
                <h1 className="text-2xl font-bold text-neutral-900 dark:text-white tracking-tight">Generated Concept</h1>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm mt-1">Review the AI-generated layout based on your prompt parameters.</p>
            </header>

            <div className="flex-1 pb-10">
                <ConceptViewer />
            </div>
        </div>
    );
}

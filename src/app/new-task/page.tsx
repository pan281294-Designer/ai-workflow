import { TaskStepper } from "@/components/TaskStepper";

export default function NewTask() {
    return (
        <div className="flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-500">
            <header className="mb-10 text-center">
                <h1 className="text-3xl font-bold text-neutral-900 dark:text-white tracking-tight">Create New Workflow</h1>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm mt-2 max-w-lg mx-auto">
                    Define your project requirements and let AI generate the optimal design concept tailored for your specific needs.
                </p>
            </header>

            <div className="flex-1 pb-10">
                <TaskStepper />
            </div>
        </div>
    );
}

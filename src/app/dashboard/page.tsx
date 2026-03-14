import { ActivityPanel, DashboardCards, RecentProjects } from "@/components/DashboardCards";

export default function Dashboard() {
    return (
        <div className="flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-500">
            <header className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-neutral-900 dark:text-white tracking-tight">Overview</h1>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm mt-1">Track your workflow and design activities.</p>
                </div>
                <button className="bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-900 px-4 py-2 rounded-lg text-sm font-medium shadow-sm transition-colors flex items-center gap-2">
                    <span>+</span> New Task
                </button>
            </header>

            <DashboardCards />

            <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                    <RecentProjects />
                </div>
                <aside className="w-full lg:w-80 shrink-0">
                    <ActivityPanel />
                </aside>
            </div>
        </div>
    );
}

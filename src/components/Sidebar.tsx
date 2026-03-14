"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import {
  LayoutDashboard,
  PlusCircle,
  Library,
  Lightbulb,
  MessageSquare,
  Settings,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "New Task", href: "/new-task", icon: PlusCircle },
  { name: "Prompt Templates", href: "/templates", icon: Library },
  { name: "Generated Concepts", href: "/concept", icon: Lightbulb },
  { name: "Reviews", href: "/review", icon: MessageSquare },
];

const bottomItems = [
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  const NavItem = ({
    name,
    href,
    icon: Icon,
  }: {
    name: string;
    href: string;
    icon: any;
  }) => {
    const isActive = pathname === href || pathname.startsWith(href + "/");

    return (
      <Link
        href={href}
        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group text-sm font-medium ${isActive
          ? "bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50"
          : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 hover:dark:bg-neutral-800/50 hover:text-neutral-900 dark:hover:text-neutral-100"
          }`}
      >
        <Icon className={`w-4 h-4 ${isActive ? 'text-brand-500 dark:text-brand-400' : ''}`} />
        <span>{name}</span>
      </Link>
    );
  };

  return (
    <aside className="w-64 h-screen border-r border-[#e5e7eb] dark:border-neutral-800 bg-[#f9fafb] dark:bg-neutral-900/50 flex flex-col justify-between p-4 sticky top-0 shrink-0">
      <div>
        <div className="flex items-center gap-2 px-3 py-4 mb-6">
          <div className="w-6 h-6 rounded bg-brand-500 shrink-0 flex items-center justify-center">
            <span className="text-white text-xs font-bold leading-none">A</span>
          </div>
          <span className="font-semibold text-neutral-900 dark:text-white tracking-tight">
            DesignFlow AI
          </span>
        </div>

        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <NavItem key={item.name} {...item} />
          ))}
        </nav>
      </div>

      <nav className="flex flex-col gap-1 border-t border-neutral-200 dark:border-neutral-800 pt-4">
        {bottomItems.map((item) => (
          <NavItem key={item.name} {...item} />
        ))}

        <div className="mt-4 px-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-700 shrink-0"></div>
          <div className="flex flex-col overflow-hidden flex-1">
            <span className="text-sm font-medium text-neutral-900 dark:text-white truncate">Jane Designer</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400 truncate">jane@company.com</span>
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </aside>
  );
}

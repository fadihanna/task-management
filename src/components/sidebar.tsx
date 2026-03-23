'use client'

import { JSX, SVGProps } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Sidebar() {
    const pathname = usePathname()

    return (
        <div className="w-64 p-4 bg-background border-r">
            <nav className="space-y-2">
                <Link href="/" className={`flex items-center gap-2 p-2 rounded-md ${pathname === '/' ? 'bg-muted' : 'hover:bg-muted'}`}>
                    <LayoutGridIcon className="w-5 h-5" />
                    <span>Dashboard</span>
                </Link>
                <Link href="/tasks" className={`flex items-center gap-2 p-2 rounded-md ${pathname === '/tasks' ? 'bg-muted' : 'hover:bg-muted'}`}>
                    <ClipboardListIcon className="w-5 h-5" />
                    <span>Tasks</span>
                </Link>
                <Link href="/teams" className={`flex items-center gap-2 p-2 rounded-md ${pathname === '/teams' ? 'bg-muted' : 'hover:bg-muted'}`}>
                    <UsersIcon className="w-5 h-5" />
                    <span>Teams</span>
                </Link>
                <Link href="/reports" className={`flex items-center gap-2 p-2 rounded-md ${pathname === '/reports' ? 'bg-muted' : 'hover:bg-muted'}`}>
                    <BarChartIcon className="w-5 h-5" />
                    <span>Reports</span>
                </Link>
            </nav>
        </div>
    )
}

function BarChartIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="12" x2="12" y1="20" y2="10" />
            <line x1="18" x2="18" y1="20" y2="4" />
            <line x1="6" x2="6" y1="20" y2="16" />
        </svg>
    )
}

function ClipboardListIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
            <path d="M12 11h4" />
            <path d="M12 16h4" />
            <path d="M8 11h.01" />
            <path d="M8 16h.01" />
        </svg>
    )
}

function LayoutGridIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="7" height="7" x="3" y="3" rx="1" />
            <rect width="7" height="7" x="14" y="3" rx="1" />
            <rect width="7" height="7" x="14" y="14" rx="1" />
            <rect width="7" height="7" x="3" y="14" rx="1" />
        </svg>
    )
}

function UsersIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    )
}

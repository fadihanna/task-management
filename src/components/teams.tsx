import { Button } from "@/components/button"
import Image from "next/image"

export default function Teams() {
    return (
        <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">Teams</h1>
                <Button variant="outline">
                    <UserPlusIcon className="w-4 h-4 mr-2" />
                    Add Member
                </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-card p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
                    <Image src="/placeholder.svg" alt="Team Member" width={80} height={80} className="rounded-full mb-4" />
                    <h3 className="font-bold text-lg">John Doe</h3>
                    <p className="text-muted-foreground">Lead Developer</p>
                    <div className="flex items-center gap-2 mt-4">
                        <Button variant="ghost" size="icon">
                            <GithubIcon className="w-5 h-5" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <TwitterIcon className="w-5 h-5" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <LinkedinIcon className="w-5 h-5" />
                        </Button>
                    </div>
                </div>
                <div className="bg-card p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
                    <Image src="/placeholder.svg" alt="Team Member" width={80} height={80} className="rounded-full mb-4" />
                    <h3 className="font-bold text-lg">Jane Smith</h3>
                    <p className="text-muted-foreground">UI/UX Designer</p>
                    <div className="flex items-center gap-2 mt-4">
                        <Button variant="ghost" size="icon">
                            <GithubIcon className="w-5 h-5" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <TwitterIcon className="w-5 h-5" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <LinkedinIcon className="w-5 h-5" />
                        </Button>
                    </div>
                </div>
                <div className="bg-card p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
                    <Image src="/placeholder.svg" alt="Team Member" width={80} height={80} className="rounded-full mb-4" />
                    <h3 className="font-bold text-lg">Bob Johnson</h3>
                    <p className="text-muted-foreground">Project Manager</p>
                    <div className="flex items-center gap-2 mt-4">
                        <Button variant="ghost" size="icon">
                            <GithubIcon className="w-5 h-5" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <TwitterIcon className="w-5 h-5" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <LinkedinIcon className="w-5 h-5" />
                        </Button>
                    </div>
                </div>
                <div className="bg-card p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
                    <Image src="/placeholder.svg" alt="Team Member" width={80} height={80} className="rounded-full mb-4" />
                    <h3 className="font-bold text-lg">Alice Williams</h3>
                    <p className="text-muted-foreground">Frontend Developer</p>
                    <div className="flex items-center gap-2 mt-4">
                        <Button variant="ghost" size="icon">
                            <GithubIcon className="w-5 h-5" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <TwitterIcon className="w-5 h-5" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <LinkedinIcon className="w-5 h-5" />
                        </Button>
                    </div>
                </div>
                <div className="bg-card p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
                    <Image src="/placeholder.svg" alt="Team Member" width={80} height={80} className="rounded-full mb-4" />
                    <h3 className="font-bold text-lg">David Brown</h3>
                    <p className="text-muted-foreground">Backend Developer</p>
                    <div className="flex items-center gap-2 mt-4">
                        <Button variant="ghost" size="icon">
                            <GithubIcon className="w-5 h-5" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <TwitterIcon className="w-5 h-5" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <LinkedinIcon className="w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function GithubIcon(props) {
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
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
    )
}


function LinkedinIcon(props) {
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
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    )
}


function TwitterIcon(props) {
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
            <path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.4 3.3 4.4s-1.3.8-3.3-1.4c-1.4 2.8-2.8 4.2-4.2 4.2s-2.8-1.4-4.2-4.2c-2 2.2-3.3 1.4-3.3 1.4s1.7-3 3.3-4.4c-1.3-1.3-2-3.4-2-3.4s1.4.7 2.8 1.4c1.4-1.4 2.8-2.1 4.2-2.1s2.8.7 4.2 2.1c1.4-.7 2.8-1.4 2.8-1.4z" />
        </svg>
    )
}


function UserPlusIcon(props) {
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
            <line x1="19" x2="19" y1="8" y2="14" />
            <line x2="16" x1="22" y1="11" y2="11" />
        </svg>
    )
}

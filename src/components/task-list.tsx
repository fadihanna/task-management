import { Button } from "@/components/button"
import { JSX, SVGProps } from "react"

export default function TaskList() {
    return (
        <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <Button variant="outline">
                    <PlusIcon className="w-4 h-4 mr-2" />
                    Add Task
                </Button>
            </div>
            <div className="bg-card p-4 rounded-lg shadow-sm">
                <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <div>
                                <div className="font-medium">Implement new feature</div>
                                <div className="text-sm text-muted-foreground">Due in 3 days</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon">
                                <FilePenIcon className="w-4 h-4" />
                                <span className="sr-only">Edit</span>
                            </Button>
                            <Button variant="ghost" size="icon">
                                <TrashIcon className="w-4 h-4" />
                                <span className="sr-only">Delete</span>
                            </Button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <div>
                                <div className="font-medium">Fix bug in authentication</div>
                                <div className="text-sm text-muted-foreground">Due in 5 days</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon">
                                <FilePenIcon className="w-4 h-4" />
                                <span className="sr-only">Edit</span>
                            </Button>
                            <Button variant="ghost" size="icon">
                                <TrashIcon className="w-4 h-4" />
                                <span className="sr-only">Delete</span>
                            </Button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-secondary" />
                            <div>
                                <div className="font-medium">Update documentation</div>
                                <div className="text-sm text-muted-foreground">Due in 1 week</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon">
                                <FilePenIcon className="w-4 h-4" />
                                <span className="sr-only">Edit</span>
                            </Button>
                            <Button variant="ghost" size="icon">
                                <TrashIcon className="w-4 h-4" />
                                <span className="sr-only">Delete</span>
                            </Button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                            <div>
                                <div className="font-medium line-through">Design new dashboard</div>
                                <div className="text-sm text-muted-foreground">Completed on May 15, 2024</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon">
                                <FilePenIcon className="w-4 h-4" />
                                <span className="sr-only">Edit</span>
                            </Button>
                            <Button variant="ghost" size="icon">
                                <TrashIcon className="w-4 h-4" />
                                <span className="sr-only">Delete</span>
                            </Button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                            <div>
                                <div className="font-medium line-through">Research new technologies</div>
                                <div className="text-sm text-muted-foreground">Completed on May 12, 2024</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon">
                                <FilePenIcon className="w-4 h-4" />
                                <span className="sr-only">Edit</span>
                            </Button>
                            <Button variant="ghost" size="icon">
                                <TrashIcon className="w-4 h-4" />
                                <span className="sr-only">Delete</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function FilePenIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
        </svg>
    )
}

function PlusIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg>
    )
}

function TrashIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="M3 6h18" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
    )
}

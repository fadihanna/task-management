import { JSX, SVGProps } from "react"
import {ResponsiveBar} from "@nivo/bar"

export default function MonthlyReports() {
    return (
        <div className="flex flex-col h-full">
            <header className="bg-primary text-primary-foreground py-4 px-6">
                <h1 className="text-2xl font-bold">Monthly Reports</h1>
            </header>
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                <div className="bg-card rounded-lg shadow-sm p-6">
                    <h2 className="text-lg font-semibold mb-4">Team Hours</h2>
                    <div className="w-full aspect-[4/3]">
                        <BarChart className="w-full h-full" />
                    </div>
                </div>
                <div className="bg-card rounded-lg shadow-sm p-6">
                    <h2 className="text-lg font-semibold mb-4">Task Breakdown</h2>
                    <div className="w-full aspect-[4/3]">
                        <PieChart className="w-full h-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}

function BarChart(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <div {...props}>
            <ResponsiveBar
                data={[
                    { name: "Dev", count: 111 },
                    { name: "QC", count: 97 },
                    { name: "BA", count: 75 },
                    { name: "UI/UX", count: 45 },
                    { name: "PM", count: 30 },
                ]}
                keys={["count"]}
                indexBy="name"
                margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
                padding={0.3}
                colors={["#2563eb"]}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Team",
                    legendPosition: "middle",
                    legendOffset: 45,
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Hours",
                    legendPosition: "middle",
                    legendOffset: -50,
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                role="application"
                ariaLabel="Team hours breakdown"
            />
        </div>
    )
}

function PieChart(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <div {...props}>
            <ResponsiveBar
                data={[
                    { name: "Jira-101", count: 45 },
                    { name: "Jira-102", count: 60 },
                    { name: "Verbal Task 1", count: 30 },
                    { name: "Jira-103", count: 25 },
                    { name: "Verbal Task 2", count: 15 },
                ]}
                keys={["count"]}
                indexBy="name"
                margin={{ top: 50, right: 50, bottom: 100, left: 60 }}
                padding={0.3}
                colors={["#2563eb"]}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: -45,
                    legend: "Task",
                    legendPosition: "middle",
                    legendOffset: 85,
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Hours",
                    legendPosition: "middle",
                    legendOffset: -50,
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                role="application"
                ariaLabel="Task breakdown"
            />
        </div>
    )
}

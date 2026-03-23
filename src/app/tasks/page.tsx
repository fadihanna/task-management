'use client'

import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import Tasks from "@/components/tasks";

export default function TasksPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-6">
          <Tasks />
        </main>
      </div>
    </div>
  );
}

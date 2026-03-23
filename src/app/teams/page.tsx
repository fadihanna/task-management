'use client'

import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import Teams from "@/components/teams";

export default function TeamsPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-6">
          <Teams />
        </main>
      </div>
    </div>
  );
}

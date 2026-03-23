import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import MonthlyReports from "@/components/monthly-reports";

export default function Reports() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-6">
          <MonthlyReports />
        </main>
      </div>
    </div>
  );
}

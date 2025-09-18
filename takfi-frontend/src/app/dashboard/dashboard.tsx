import { Briefcase, FileCheck, TrendingUp, User } from "lucide-react";
import { ClaimCard, MetricCard } from "../components/metriccard";

export default function Dashboard() {
  return (
    <>
<div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-6">
  <MetricCard title="Pool Size" value="$111.81K" icon={Briefcase} />
  <MetricCard title="Active Policies" value="$111.81K" icon={FileCheck} />
  <MetricCard title="Surplus Distributed" value="$111.81K" icon={TrendingUp} />
</div>
<ClaimCard title="Claim History" value="Claim History" icon={User} />
{/* <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 min-h-[400px] border border-gray-700/50">
  <div className="flex items-center justify-center h-full">
    <div className="text-center">
      <h3 className="text-2xl font-bold text-white mb-4">Welcome to TakFi AI</h3>
      <p className="text-gray-400">Your Sharia-compliant insurance dashboard</p>
    </div>
  </div>
</div> */}
    </>
  );
}
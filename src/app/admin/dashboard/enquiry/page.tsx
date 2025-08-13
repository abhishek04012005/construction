import LeadDashboard from '@/components/dashboard/leaddashboard/LeadDashboard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard - Construction Company',
  description: 'Lead submissions dashboard',
};

export default function DashboardLayout() {
  return (
    <>
      <LeadDashboard />
    </>
  );
}
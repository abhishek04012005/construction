import ContactDashboard from '@/components/dashboard/ContactDashboard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard - Construction Company',
  description: 'Contact submissions dashboard',
};

export default function DashboardLayout() {
  return (
    <>
      <ContactDashboard/>
    </>
  );
}
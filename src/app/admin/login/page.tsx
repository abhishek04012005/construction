import AdminLogin from '@/components/dashboard/adminlogin/adminlogin';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard - Construction Company',
  description: 'Admin login page',
};

export default function AdminLayout() {
  return (
    <>
      <AdminLogin/>
    </>
  );
}
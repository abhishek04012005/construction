"use client";

import { usePathname } from "next/navigation";
import AdminNavbar from "@/components/dashboard/adminnavbar/AdminNavbar";
import Footer from "@/components/footer/Footer";
import { Toaster } from "react-hot-toast";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const showNavbar = pathname !== "/admin/login";

    return (
        <html lang="en">
            <body>
                {showNavbar && <AdminNavbar />}
                {children}
                <Footer />
                <Toaster position="top-right" />
            </body>
        </html>
    );
}

import { Navbar } from '../components';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex w-full min-h-screen bg-gray-800 text-white">
            <div>
                <Navbar />
            </div>
            <main className="flex-1">{children}</main>
        </div>
    );
}

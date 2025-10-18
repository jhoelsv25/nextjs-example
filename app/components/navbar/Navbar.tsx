import Image from 'next/image';
import { ActiveLink } from '../active-link/ActiveLink';

export const Navbar = () => {
    console.log('Navbar component loaded');
    const items = [
        { name: 'Dashboard', href: '/dashboard/home', title: 'Dashboard', current: true },
        { name: 'Database', href: '/dashboard/database', title: 'Database', current: false },
        { name: 'Cloud Storage', href: '/dashboard/cloud-storage', title: 'Cloud Storage', current: false },
        { name: 'Reports', href: '/dashboard/reports', title: 'Reports', current: false },
        { name: 'Security', href: '/dashboard/security', title: 'Security', current: false },
        { name: 'Extensions', href: '/dashboard/extensions', title: 'Extensions', current: false },
        { name: 'Settings', href: '/dashboard/settings', title: 'Settings', current: false },
    ];
    console.log('Navbar rendered');
    return (
        <div
            id="menu"
            style={{ width: '380px' }}
            className="bg-gray-900 min-h-screen z-10 text-slate-300   h-screen overflow-auto "
        >
            <div id="logo" className="my-4 px-6">
                <h1 className="text-lg md:text-2xl font-bold text-white">
                    Dash<span className="text-blue-500">8</span>.
                </h1>
                <p className="text-slate-500 text-sm">Manage your actions and activities</p>
            </div>
            <div id="profile" className="px-6 py-10">   
                <p className="text-slate-500">Welcome back,</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image
                            className="rounded-full w-8 h-8"
                            src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
                            alt="User Avatar"
                            width={32}
                            height={32}
                        />
                    </span>
                    <span className="text-sm md:text-base font-bold">Jhoel Silvestre </span>
                </a>
            </div>
            <div id="nav" className="w-full px-6">
                {items.map((item) => (
                    <ActiveLink
                        key={item.name}
                        path={item.href}
                        name={item.name}
                        title={item.title}
                    />
                ))}
            </div>
        </div>
    );
};

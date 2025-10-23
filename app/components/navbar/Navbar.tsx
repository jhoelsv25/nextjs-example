import Image from 'next/image';
import { ActiveLink } from '../active-link/ActiveLink';
import { IoCloud, IoDocument, IoExtensionPuzzle, IoHome, IoSettings, IoShield } from 'react-icons/io5';
import { IoMdAlert } from 'react-icons/io';
import { title } from 'process';

export const Navbar = () => {
    console.log('Navbar component loaded');
    const items = [
        { title: 'Dashboard', href: '/dashboard/home', subtitle: 'Overview of your activities', icon:<IoHome /> , current: true },
        { title: 'Counter', href: '/dashboard/counter', subtitle: 'View and manage counters', icon:<IoHome /> , current: false },
        { title: 'Pokemon', href: '/dashboard/pokemon', subtitle: 'View and manage Pokemon', icon:<IoHome /> , current: false },
        { title: 'Database', href: '/dashboard/database', subtitle: 'Manage your database', icon:<IoMdAlert /> , current: false },
        { title: 'Cloud Storage', href: '/dashboard/cloud-storage', subtitle: 'Access your files in the cloud', icon:<IoCloud /> , current: false },
        { title: 'Reports', href: '/dashboard/reports', subtitle: 'View your reports', icon:<IoDocument /> , current: false },
        { title: 'Security', href: '/dashboard/security', subtitle: 'Manage security settings', icon:<IoShield /> , current: false },
        { title: 'Extensions', href: '/dashboard/extensions', subtitle: 'Manage extensions', icon:<IoExtensionPuzzle /> , current: false },
        { title: 'Settings', href: '/dashboard/settings', subtitle: 'Settings', icon:<IoSettings /> , current: false },
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
                        key={item.title}
                        path={item.href}
                        title={item.title}
                        subtitle={item.subtitle}
                        icon={item.icon}
                    />
                ))}
            </div>
        </div>
    );
};

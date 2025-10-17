import { ActiveLink } from '../active-link/ActiveLink';

export const Navbar = () => {
    console.log('Navbar component loaded');
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
        { name: 'Pricing', path: '/pricing' },
    ];
    console.log('Navbar rendered');
    return (
        <nav className="w-full bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center ">
                <div className="text-lg font-bold">MyApp</div>
                <div className="space-x-4">
                    {navItems.map((item) => (
                        <ActiveLink key={item.name} {...item} />
                    ))}
                </div>
            </div>
        </nav>
    );
};

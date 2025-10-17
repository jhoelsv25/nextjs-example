import { Navbar } from '@components/navbar/Navbar';
export const metadata = {
    title: "Public Layout - Jhoel's Next.js App",
    description: 'Layout for public pages.',
};

export default function PublicLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
}

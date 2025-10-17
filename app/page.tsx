import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-24">
            <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
            <Image
                src="/next.svg"
                alt="Next.js Logo"
                width={200}
                height={200}
                priority
                style={{ height: 'auto' }}
            />
            <Link href={'/about'} className="mt-4 text-lg text-blue-500 underline">
                Go to About Page
            </Link>
        </div>
    );
}

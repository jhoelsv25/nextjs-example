import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About Us - Jhoel's Next.js App",
    description: 'Learn more about us and our mission.',
};

export default function About() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-24">
            <h1 className="text-3xl font-bold underline">About Us</h1>
            <p className="mt-4 text-lg">
                We are a team of passionate developers building amazing applications with Next.js.
            </p>
        </div>
    );
}

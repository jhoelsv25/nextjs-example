import { Metadata } from 'next/dist/lib/metadata/types/metadata-interface';

export const metadata: Metadata = {
    title: "Contact - Jhoel's Next.js App",
    description: 'Get in touch with us.',
};

export default function Contact() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-24">
            <h1 className="text-3xl font-bold underline">Contact Page</h1>
            <p className="mt-4 text-lg">
                If you have any questions or inquiries, feel free to reach out to us!
            </p>
        </div>
    );
}

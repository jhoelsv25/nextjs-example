import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Pricing - Jhoel's Next.js App",
    description: 'Discover our pricing plans and choose the best option for you.',
    keywords: ['pricing', 'plans', 'subscription', 'cost'],
};

export default function Pricing() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-24">
            <h1 className="text-3xl font-bold underline">Pricing Page</h1>
            <p className="mt-4 text-lg">
                Choose the plan that best fits your needs. We offer flexible pricing options for
                individuals and businesses.
            </p>
        </div>
    );
}

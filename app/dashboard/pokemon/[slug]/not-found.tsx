"use client";

export default function NotFoundPage() {
    return (
        <div className="p-6 min-h-screen h-screen flex flex-col justify-center items-center overflow-auto">
            <h1>404 - Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition" onClick={() => window.location.href = '/'}   >
                Go Back Home
            </button>
        </div>
    );
}
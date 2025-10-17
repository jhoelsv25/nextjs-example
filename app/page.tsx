import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
      <Image
        src="/next.svg"
        alt="Next.js Logo"
        width={200}
        height={200}
        priority
      />
    </div>
  );
}

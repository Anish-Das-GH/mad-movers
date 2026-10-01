import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#09020d] text-white flex flex-col items-center justify-center p-6 text-center space-y-4">
      <h2 className="text-4xl font-black text-amber-400">404 - Beat Not Found</h2>
      <p className="text-purple-200 text-sm max-w-md">
        This movement routine doesn&apos;t exist or has moved to another studio.
      </p>
      <Link
        href="/"
        className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-purple-950 font-black text-xs uppercase tracking-wider shadow-lg"
      >
        Return to Dance Floor
      </Link>
    </div>
  );
}

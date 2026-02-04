export default function Footer() {
  return (
    <footer className="border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold tracking-tight" style={{ color: 'var(--accent)' }}>
            SHUNYA
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} SHUNYA. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
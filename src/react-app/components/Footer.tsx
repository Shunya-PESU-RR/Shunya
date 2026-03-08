export default function Footer() {
  return (
    <footer className="border-t glass-panel">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold tracking-tight text-gradient">
            SHUNYA
          </div>
          <div className="text-sm text-muted">
            © {new Date().getFullYear()} SHUNYA. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
import { Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 glass-panel relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="text-2xl font-bold tracking-tight text-gradient">
              SHUNYA
            </div>
            <div className="text-sm text-muted">
              © {new Date().getFullYear()} SHUNYA. All rights reserved.
            </div>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://www.instagram.com/shunya_pes/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-[#E1306C] transition-colors p-2 rounded-full hover:bg-white/5"
              title="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/shunya-pes/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-[#0077B5] transition-colors p-2 rounded-full hover:bg-white/5"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:shunya@pes.edu"
              className="text-muted hover:text-[#0070f3] transition-colors p-2 rounded-full hover:bg-white/5"
              title="Email Us"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-gray-300 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center border-b border-gray-800 pb-10">
          
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-white text-xl font-bold flex items-center justify-center md:justify-start gap-2">
              <span className="text-2xl">🌿</span> PaddyScan AI
            </h3>
            <p className="mt-2 text-sm text-gray-400 max-w-xs mx-auto md:mx-0">
              Empowering farmers with instant AI diagnosis to protect the world's rice crops.
            </p>
          </div>

          {/* Quick Links / Project Info */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-green-500">Academic Project</span>
            <p className="text-sm font-medium">Research & Development Phase</p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="hover:text-white transition-colors">Documentation</a>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
            </div>
          </div>

          {/* Contact / Support */}
          <div className="text-center md:text-right">
            <p className="text-sm font-semibold text-white">Need Support?</p>
            <p className="text-sm text-gray-400 mt-1">support@everlinesystems.in</p>
            <div className="mt-3 flex justify-center md:justify-end gap-3 text-xs">
               <span className="px-2 py-1 bg-green-900/30 text-green-400 rounded-md border border-green-800/50">React</span>
               <span className="px-2 py-1 bg-blue-900/30 text-blue-400 rounded-md border border-blue-800/50">FastAPI</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60">
          <p>© {currentYear} PaddyScan. Built for Agriculture Excellence.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
import { Link } from "react-router-dom";

const SiteFooter = () => {
  return (
    <footer className="mt-20 bg-patriot-blue text-primary-foreground">
      {/* Thin red top bar */}
      <div className="h-1 w-full bg-patriot-red" />
      
      <div className="container py-10 text-center">
        <p className="font-serif text-lg">
          We Love America – Preserving Our Values, Protecting Our Future
        </p>
        
        {/* Footer Links */}
        <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm">
          <Link 
            to="/privacy-and-data" 
            className="hover:text-white transition"
          >
            Privacy & Data
          </Link>
          <Link 
            to="/social-welfare-organization" 
            className="hover:text-white transition"
          >
            Social Welfare Organization (501c4)
          </Link>
          <Link 
            to="/transparency-and-operations" 
            className="hover:text-white transition"
          >
            Transparency & Operations
          </Link>
        </div>

        <p className="mt-6 text-sm text-white/75">
          © 2026 America First Citizens Network
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;

export function Footer() {
  return (
    <footer className="py-6 md:py-8 border-t">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>
          &copy; {new Date().getFullYear()} NextGen AI. All rights reserved.
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-foreground transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Blog
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
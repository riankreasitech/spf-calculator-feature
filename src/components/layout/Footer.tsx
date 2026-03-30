import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t bg-muted/20">
      <div className="container mx-auto px-4 sm:px-8 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-3">
            <h3 className="font-semibold text-lg">Platform</h3>
            <Link href="#events" className="text-sm text-muted-foreground hover:text-foreground">Live Events</Link>
            <Link href="#content" className="text-sm text-muted-foreground hover:text-foreground">Content Translation</Link>
            <Link href="#conversations" className="text-sm text-muted-foreground hover:text-foreground">Conversations</Link>
            <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground">Pricing</Link>
          </div>
          <div className="flex flex-col space-y-3">
            <h3 className="font-semibold text-lg">Solutions</h3>
            <Link href="#churches" className="text-sm text-muted-foreground hover:text-foreground">Churches</Link>
            <Link href="#conferences" className="text-sm text-muted-foreground hover:text-foreground">Conferences</Link>
            <Link href="#education" className="text-sm text-muted-foreground hover:text-foreground">Education</Link>
            <Link href="#government" className="text-sm text-muted-foreground hover:text-foreground">Government</Link>
          </div>
          <div className="flex flex-col space-y-3">
            <h3 className="font-semibold text-lg">Resources</h3>
            <Link href="#blog" className="text-sm text-muted-foreground hover:text-foreground">Blog</Link>
            <Link href="#case-studies" className="text-sm text-muted-foreground hover:text-foreground">Case Studies</Link>
            <Link href="#help" className="text-sm text-muted-foreground hover:text-foreground">Help Center</Link>
          </div>
          <div className="flex flex-col space-y-3">
            <h3 className="font-semibold text-lg">Company</h3>
            <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground">About Us</Link>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link>
            <Link href="#privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} spf.io. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-sm text-muted-foreground">Follow us: </span>
            <Link href="#" className="text-muted-foreground hover:text-foreground">Twitter</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">LinkedIn</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

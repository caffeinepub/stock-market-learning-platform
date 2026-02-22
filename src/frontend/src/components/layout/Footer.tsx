import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'stock-market-academy'
  );

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-3">Stock Market Academy</h3>
            <p className="text-sm text-muted-foreground">
              Your comprehensive resource for learning about stocks and investing, from beginner to advanced levels.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/beginner" className="hover:text-foreground transition-colors">
                  Beginner Guide
                </a>
              </li>
              <li>
                <a href="/intermediate" className="hover:text-foreground transition-colors">
                  Intermediate Lessons
                </a>
              </li>
              <li>
                <a href="/advanced" className="hover:text-foreground transition-colors">
                  Advanced Strategies
                </a>
              </li>
              <li>
                <a href="/glossary" className="hover:text-foreground transition-colors">
                  Glossary
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-3">Disclaimer</h3>
            <p className="text-sm text-muted-foreground">
              This website is for educational purposes only. Not financial advice. Always do your own research and
              consult with a financial advisor.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            © {currentYear} Stock Market Academy. Built with{' '}
            <Heart className="h-4 w-4 text-destructive fill-destructive" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

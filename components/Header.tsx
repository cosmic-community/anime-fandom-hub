import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-sm border-b border-primary/20">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gradient">
              🎌 Anime Fandom Hub
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#series"
              className="text-white hover:text-primary transition-colors"
            >
              Series
            </Link>
            <Link
              href="/#characters"
              className="text-white hover:text-primary transition-colors"
            >
              Characters
            </Link>
            <Link
              href="/#genres"
              className="text-white hover:text-primary transition-colors"
            >
              Genres
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
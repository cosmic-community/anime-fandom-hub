import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-lighter border-t border-primary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center space-x-2">
              <span className="text-2xl font-bold text-gradient">
                🎌 Anime Fandom Hub
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              Your ultimate destination for anime series, character profiles, and genre exploration. Join the fandom!
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-gray-400 hover:text-primary transition-colors text-sm"
              >
                Home
              </Link>
              <Link
                href="/#series"
                className="text-gray-400 hover:text-primary transition-colors text-sm"
              >
                Anime Series
              </Link>
              <Link
                href="/#characters"
                className="text-gray-400 hover:text-primary transition-colors text-sm"
              >
                Characters
              </Link>
              <Link
                href="/#genres"
                className="text-gray-400 hover:text-primary transition-colors text-sm"
              >
                Genres
              </Link>
            </nav>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Community</h3>
            <p className="text-gray-400 text-sm">
              Connect with fellow anime enthusiasts and share your passion for Japanese animation.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-2xl">🌟</span>
              <span className="text-2xl">⚡</span>
              <span className="text-2xl">🎭</span>
              <span className="text-2xl">🗾</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {currentYear} Anime Fandom Hub. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Powered by{' '}
              <a
                href="https://www.cosmicjs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-light transition-colors"
              >
                Cosmic
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
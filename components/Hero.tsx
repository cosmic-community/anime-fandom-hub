export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-dark to-secondary/20"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          <span className="text-gradient">Anime Fandom Hub</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Discover your favorite anime series, explore character profiles, and immerse yourself in the world of anime culture
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#series"
            className="px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-full font-semibold transition-all card-hover"
          >
            Explore Series
          </a>
          <a
            href="#characters"
            className="px-8 py-3 bg-secondary hover:bg-secondary-dark text-white rounded-full font-semibold transition-all card-hover"
          >
            View Characters
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-8 h-8 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}
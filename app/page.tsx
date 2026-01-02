import { getAllSeries, getAllCharacters, getAllGenres } from '@/lib/api'
import Hero from '@/components/Hero'
import SeriesGrid from '@/components/SeriesGrid'
import CharacterGrid from '@/components/CharacterGrid'
import GenreList from '@/components/GenreList'

export const revalidate = 60

export default async function HomePage() {
  const [series, characters, genres] = await Promise.all([
    getAllSeries(),
    getAllCharacters(),
    getAllGenres(),
  ])

  return (
    <div className="min-h-screen">
      <Hero />
      
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-8 text-gradient">
          Featured Anime Series
        </h2>
        <SeriesGrid series={series} />
      </section>

      <section className="container mx-auto px-4 py-16 bg-dark-lighter/50">
        <h2 className="text-4xl font-bold mb-8 text-gradient">
          Popular Characters
        </h2>
        <CharacterGrid characters={characters} />
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-8 text-gradient">
          Browse by Genre
        </h2>
        <GenreList genres={genres} />
      </section>
    </div>
  )
}
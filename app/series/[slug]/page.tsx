import { getSeriesBySlug, getCharactersBySeries } from '@/lib/api'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import CharacterCard from '@/components/CharacterCard'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function SeriesPage({ params }: PageProps) {
  const { slug } = await params
  const series = await getSeriesBySlug(slug)

  if (!series) {
    notFound()
  }

  const characters = await getCharactersBySeries(series.id)

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Series Header */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            {series.metadata.cover_art && (
              <img
                src={`${series.metadata.cover_art.imgix_url}?w=1200&h=800&fit=crop&auto=format,compress`}
                alt={series.metadata.series_name}
                width={600}
                height={400}
                className="rounded-lg shadow-2xl w-full"
              />
            )}
          </div>
          
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-bold mb-4 text-gradient">
              {series.metadata.series_name}
            </h1>
            
            <div className="flex flex-wrap gap-4 mb-6">
              {series.metadata.genre && (
                <span className="px-4 py-2 bg-primary/20 rounded-full text-primary">
                  {series.metadata.genre.metadata.genre_name}
                </span>
              )}
              {series.metadata.status && (
                <span className="px-4 py-2 bg-secondary/20 rounded-full text-secondary">
                  {series.metadata.status.value}
                </span>
              )}
            </div>
            
            <div
              className="prose prose-invert max-w-none mb-6"
              dangerouslySetInnerHTML={{ __html: series.metadata.description }}
            />
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              {series.metadata.release_year && (
                <div>
                  <span className="text-gray-400">Release Year:</span>
                  <p className="font-semibold">{series.metadata.release_year}</p>
                </div>
              )}
              {series.metadata.episode_count && (
                <div>
                  <span className="text-gray-400">Episodes:</span>
                  <p className="font-semibold">{series.metadata.episode_count}</p>
                </div>
              )}
              {series.metadata.studio && (
                <div>
                  <span className="text-gray-400">Studio:</span>
                  <p className="font-semibold">{series.metadata.studio}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Characters Section */}
        {characters.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gradient">
              Characters from this Series
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {characters.map((character) => (
                <CharacterCard key={character.id} character={character} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
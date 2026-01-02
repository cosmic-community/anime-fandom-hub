import { getCharacterBySlug } from '@/lib/api'
import { notFound } from 'next/navigation'
import Link from 'next/link'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function CharacterPage({ params }: PageProps) {
  const { slug } = await params
  const character = await getCharacterBySlug(slug)

  if (!character) {
    notFound()
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            {character.metadata.character_image && (
              <img
                src={`${character.metadata.character_image.imgix_url}?w=1200&h=1600&fit=crop&auto=format,compress`}
                alt={character.metadata.character_name}
                width={600}
                height={800}
                className="rounded-lg shadow-2xl w-full"
              />
            )}
          </div>
          
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-bold mb-4 text-gradient">
              {character.metadata.character_name}
            </h1>
            
            <div className="flex flex-wrap gap-4 mb-6">
              {character.metadata.role && (
                <span className="px-4 py-2 bg-primary/20 rounded-full text-primary">
                  {character.metadata.role.value}
                </span>
              )}
            </div>
            
            {character.metadata.biography && (
              <div
                className="prose prose-invert max-w-none mb-8"
                dangerouslySetInnerHTML={{ __html: character.metadata.biography }}
              />
            )}
            
            {character.metadata.anime_series && (
              <div className="p-6 bg-dark-lighter rounded-lg anime-border">
                <h3 className="text-xl font-semibold mb-2">From Series</h3>
                <Link
                  href={`/series/${character.metadata.anime_series.slug}`}
                  className="text-primary hover:text-primary-light transition-colors"
                >
                  {character.metadata.anime_series.metadata.series_name}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
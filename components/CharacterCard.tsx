import Link from 'next/link'
import { Character } from '@/types'

interface CharacterCardProps {
  character: Character
}

export default function CharacterCard({ character }: CharacterCardProps) {
  return (
    <Link href={`/characters/${character.slug}`}>
      <div className="group relative overflow-hidden rounded-lg anime-border card-hover bg-dark-lighter">
        {character.metadata.character_image && (
          <div className="relative h-96 overflow-hidden">
            <img
              src={`${character.metadata.character_image.imgix_url}?w=800&h=1200&fit=crop&auto=format,compress`}
              alt={character.metadata.character_name}
              width={400}
              height={600}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent"></div>
          </div>
        )}
        
        <div className="absolute bottom-0 left-0 right-0 p-6">
          {character.metadata.role && (
            <span className="inline-block text-xs px-3 py-1 bg-primary/80 rounded-full mb-2">
              {character.metadata.role.value}
            </span>
          )}
          
          <h3 className="text-2xl font-bold mb-1 text-white group-hover:text-primary transition-colors">
            {character.metadata.character_name}
          </h3>
          
          {character.metadata.anime_series && (
            <p className="text-sm text-gray-300">
              {character.metadata.anime_series.metadata.series_name}
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}
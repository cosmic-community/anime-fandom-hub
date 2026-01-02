import { Genre } from '@/types'

interface GenreCardProps {
  genre: Genre
}

export default function GenreCard({ genre }: GenreCardProps) {
  return (
    <div className="p-6 rounded-lg anime-border card-hover bg-dark-lighter">
      <h3 className="text-2xl font-bold mb-3 text-primary">
        {genre.metadata.genre_name}
      </h3>
      {genre.metadata.description && (
        <p className="text-gray-300 text-sm">
          {genre.metadata.description}
        </p>
      )}
    </div>
  )
}
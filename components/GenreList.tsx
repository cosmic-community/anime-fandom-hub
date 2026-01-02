import { Genre } from '@/types'
import GenreCard from './GenreCard'

interface GenreListProps {
  genres: Genre[]
}

export default function GenreList({ genres }: GenreListProps) {
  if (!genres || genres.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">No genres available yet.</p>
      </div>
    )
  }

  return (
    <div id="genres" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {genres.map((genre) => (
        <GenreCard key={genre.id} genre={genre} />
      ))}
    </div>
  )
}
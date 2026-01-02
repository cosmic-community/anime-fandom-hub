import Link from 'next/link'
import { AnimeSeries } from '@/types'

interface SeriesCardProps {
  series: AnimeSeries
}

export default function SeriesCard({ series }: SeriesCardProps) {
  return (
    <Link href={`/series/${series.slug}`}>
      <div className="group relative overflow-hidden rounded-lg anime-border card-hover bg-dark-lighter">
        {series.metadata.cover_art && (
          <div className="relative h-96 overflow-hidden">
            <img
              src={`${series.metadata.cover_art.imgix_url}?w=800&h=1200&fit=crop&auto=format,compress`}
              alt={series.metadata.series_name}
              width={400}
              height={600}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent"></div>
          </div>
        )}
        
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center gap-2 mb-2">
            {series.metadata.genre && (
              <span className="text-xs px-2 py-1 bg-primary/80 rounded-full">
                {series.metadata.genre.metadata.genre_name}
              </span>
            )}
            {series.metadata.status && (
              <span className="text-xs px-2 py-1 bg-secondary/80 rounded-full">
                {series.metadata.status.value}
              </span>
            )}
          </div>
          
          <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
            {series.metadata.series_name}
          </h3>
          
          <div className="flex items-center gap-4 text-sm text-gray-300">
            {series.metadata.release_year && (
              <span>{series.metadata.release_year}</span>
            )}
            {series.metadata.episode_count && (
              <span>{series.metadata.episode_count} episodes</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
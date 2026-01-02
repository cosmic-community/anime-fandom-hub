import { AnimeSeries } from '@/types'
import SeriesCard from './SeriesCard'

interface SeriesGridProps {
  series: AnimeSeries[]
}

export default function SeriesGrid({ series }: SeriesGridProps) {
  if (!series || series.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">No anime series available yet.</p>
      </div>
    )
  }

  return (
    <div id="series" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {series.map((item) => (
        <SeriesCard key={item.id} series={item} />
      ))}
    </div>
  )
}
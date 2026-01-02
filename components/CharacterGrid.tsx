import { Character } from '@/types'
import CharacterCard from './CharacterCard'

interface CharacterGridProps {
  characters: Character[]
}

export default function CharacterGrid({ characters }: CharacterGridProps) {
  if (!characters || characters.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">No characters available yet.</p>
      </div>
    )
  }

  return (
    <div id="characters" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  )
}
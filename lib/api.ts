import { cosmic, hasStatus } from './cosmic'
import { AnimeSeries, Character, Genre } from '@/types'

// Fetch all anime series
export async function getAllSeries(): Promise<AnimeSeries[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'anime-series' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as AnimeSeries[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch anime series')
  }
}

// Fetch single anime series by slug
export async function getSeriesBySlug(slug: string): Promise<AnimeSeries | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'anime-series', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.object as AnimeSeries
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch anime series')
  }
}

// Fetch all characters
export async function getAllCharacters(): Promise<Character[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'characters' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as Character[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch characters')
  }
}

// Fetch single character by slug
export async function getCharacterBySlug(slug: string): Promise<Character | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'characters', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.object as Character
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch character')
  }
}

// Fetch all genres
export async function getAllGenres(): Promise<Genre[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'genres' })
      .props(['id', 'title', 'slug', 'metadata'])
    
    return response.objects as Genre[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch genres')
  }
}

// Fetch characters by series
export async function getCharactersBySeries(seriesId: string): Promise<Character[]> {
  try {
    const response = await cosmic.objects
      .find({
        type: 'characters',
        'metadata.anime_series': seriesId
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as Character[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch characters')
  }
}
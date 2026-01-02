// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
  status?: string;
  thumbnail?: string;
}

// Anime Series type
export interface AnimeSeries extends CosmicObject {
  type: 'anime-series';
  metadata: {
    series_name: string;
    description: string;
    cover_art?: {
      url: string;
      imgix_url: string;
    };
    genre?: Genre;
    release_year?: number;
    episode_count?: number;
    studio?: string;
    status?: {
      key: 'ongoing' | 'completed' | 'upcoming';
      value: 'Ongoing' | 'Completed' | 'Upcoming';
    };
  };
}

// Character type
export interface Character extends CosmicObject {
  type: 'characters';
  metadata: {
    character_name: string;
    biography?: string;
    character_image?: {
      url: string;
      imgix_url: string;
    };
    anime_series?: AnimeSeries;
    role?: {
      key: 'protagonist' | 'antagonist' | 'supporting';
      value: 'Protagonist' | 'Antagonist' | 'Supporting';
    };
  };
}

// Genre type
export interface Genre extends CosmicObject {
  type: 'genres';
  metadata: {
    genre_name: string;
    description?: string;
  };
}

// API response type
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
}

// Type guards
export function isAnimeSeries(obj: CosmicObject): obj is AnimeSeries {
  return obj.type === 'anime-series';
}

export function isCharacter(obj: CosmicObject): obj is Character {
  return obj.type === 'characters';
}

export function isGenre(obj: CosmicObject): obj is Genre {
  return obj.type === 'genres';
}
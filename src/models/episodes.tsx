export interface Episode {
  id: number;
  date: string;
  shortDescription: string;
}

export interface DetailedEpisode extends Episode {
  fullDescriptionHtml: string;
  recordedVideoUrl: string;
}

export interface NextAndPrevious {
  next: DetailedEpisode;
  previous: DetailedEpisode;
}

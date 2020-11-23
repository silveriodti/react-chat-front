export const Types = {
  FETCHEPISODES: 'episodes/FETCH',
};

export const episodesFetched = (data: any) => ({
  type: Types.FETCHEPISODES,
  payload: data
});


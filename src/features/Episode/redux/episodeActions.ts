export const Types = {
  FETCHEPISODE: 'episode/FETCH'
};

export const episodeFetched = (data: any) => ({
  type: Types.FETCHEPISODE,
  payload: data
});
export type Poster = {
  id: string;
  name: string;
  image: string;
};

export type defaultState = {
  poster: Poster[];
};

export const defaultPoster: Poster = {
  id: "",
  name: "",
  image: "",
};

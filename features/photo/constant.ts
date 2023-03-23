export type ImageListQueryParams = {
  q: string;
  client_id: string;
};

export type ImageListQueryResponse = {
  data: any;
};

export type PhotoType = {
  id: string;
  urls: any;
  width: number;
  height: number;
  alt_description: string;
};

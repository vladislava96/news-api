export interface INews {
  category: string,
  country: string,
  description: string,
  id: string,
  language: string,
  name: string,
  url: string
}

export interface IData {
  status: string,
  sources: Array<INews>,
  articles: Array<IArticle>
}

export interface IArticle {
  urlToImage: string,
  author: string,
  source: {
    name: string
  },
  publishedAt: string,
  title: string,
  description: string,
  url: string
}

export type DataLoaded = (data: IData) => void

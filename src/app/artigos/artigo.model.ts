export interface Artigo {
  id?: number;
  title: string;
  author: string;
  content: JSON | string | HTMLElement;
  publishedDate: Date;
}

export interface ArtigoMenos {
  id?: number;
  title: string;
}

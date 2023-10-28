export enum ArticleBlockType {
  CODE = 'CODE',
  IMAGE = 'IMAGE',
  TEXT = 'TEXT',
}

export type ArticleBlockBase = {
  id: string;
}

export type ArticleCodeBlockType = {
  type: ArticleBlockType.CODE;
  code: string;
} & ArticleBlockBase

export type ArticleImageBlockType = {
  type: ArticleBlockType.IMAGE;
  src: string;
  title: string;
} & ArticleBlockBase

export type ArticleTextBlockType = {
  type: ArticleBlockType.TEXT;
  paragraphs: string[];
  title?: string;
} & ArticleBlockBase

export type ArticleBlock = ArticleCodeBlockType | ArticleImageBlockType | ArticleTextBlockType;

export enum ArticleType {
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS'
}

export type Article = {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}

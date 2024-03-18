export type resData = {
  id?:number,
  title?:string | null,
  authors?:unknown | null,
  author?:unknown | null,
  published?:unknown | null,
  pdf_url?:string | null | undefined,
  abstract?:string | null
}
export type Data = {
  title:string,
  authors?:unknown,
  author?:unknown,
  published:unknown,
  pdf_url:string,
}
export type paper = {
  paperId?:string,
  title:string,
  year:string,
  authors:unknown[],
  abstract:string,
  openAccessPdf:string
}
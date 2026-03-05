import ArticleServerWrapper from "./randomBlockComponents/articleServerWrapper";


export default function RandomArticleBlock({ locale }: { locale: string }) {
  return <ArticleServerWrapper locale={locale} />
}

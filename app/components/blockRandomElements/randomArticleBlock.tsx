import { LocaleType } from "@/app/types/types";
import ArticleServerWrapper from "./randomBlockComponents/articleServerWrapper";


export default function RandomArticleBlock({ locale }: { locale: LocaleType }) {
  return <ArticleServerWrapper locale={locale} />
}

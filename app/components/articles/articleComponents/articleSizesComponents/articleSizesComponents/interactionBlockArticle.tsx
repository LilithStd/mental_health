import { formattedDate } from "@/app/helpers/helpersFunctions"

interface InteractionBlockArticleProps {
    typeArticle: string,
    date: string
}

export default function InteractionBlockArticle({ typeArticle, date }: InteractionBlockArticleProps) {
  return (
        <div className={`flex flex-col  w-full gap-2 items-start mt-2`}>
            <div className={`flex flex-col w-full`}>
                {raitingItemComponent(typeArticle)}                
                <span className={`text-sm pl-2 pt-2 italic opacity-40`}>Published on: {formattedDate(date)}</span>
            </div>

            
        </div>
  )
}

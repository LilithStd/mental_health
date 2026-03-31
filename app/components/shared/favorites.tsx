'use client'
import IsFavoritesIcon from "@/public/icons/HeartFull.svg"
import WithOutFavoritesIcon from "@/public/icons/HeartEmpty.svg"
import { LocaleType } from "@/app/types/types"
import { useLocale } from "@/app/hooks/useLocale"

interface FavoritesProps {
    isFavorite: boolean,
    counterFavorites?: number,
    callBackIsFavorite?: () => void
}


export default  function Favorites({ isFavorite, counterFavorites, callBackIsFavorite }: FavoritesProps) {
    const locale = useLocale() as LocaleType;
    return (
        <div className={`flex items-center ${"cursor-pointer"}`} onClick={callBackIsFavorite}>
            {isFavorite ? <IsFavoritesIcon width={24} height={24} /> : <WithOutFavoritesIcon width={24} height={24} />}
            <span className="ml-2 ">{counterFavorites} {counterFavorites === 1 ? 'Like' : 'Likes'}</span>
        </div>
    )
}

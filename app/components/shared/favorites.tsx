'use client'
import IsFavoritesIcon from "@/public/icons/HeartFull.svg"
import WithOutFavoritesIcon from "@/public/icons/HeartEmpty.svg"
import { LocaleType } from "@/app/types/types"
import { useLocale } from "@/app/hooks/useLocale"
import { FAVORITES } from "@/translate/shared/favorites"
import { SIZE_ELEMENT } from "@/app/globalConsts/globalEnum"

interface FavoritesProps {
    isFavorite: boolean,
    type: SIZE_ELEMENT,
    counterFavorites?: number,
    callBackIsFavorite?: () => void
}


export default  function Favorites({ isFavorite, type, counterFavorites, callBackIsFavorite }: FavoritesProps) {
    const locale = useLocale() as LocaleType;

    return (
        <div className={`flex pl-2 items-center cursor-pointer`} onClick={callBackIsFavorite}>
            {isFavorite ? <IsFavoritesIcon width={ type === SIZE_ELEMENT.FULL ? 24 : 18} height={ type === SIZE_ELEMENT.FULL ? 24 : 18} /> : <WithOutFavoritesIcon width={ type === SIZE_ELEMENT.FULL ? 24 : 18} height={ type === SIZE_ELEMENT.FULL ? 24 : 18} />}
            <span className={`ml-2 ${type === SIZE_ELEMENT.FULL ? 'text-md' : 'text-xs'}`}>{counterFavorites} {counterFavorites && counterFavorites <= 1 ? FAVORITES[locale].like : FAVORITES[locale].likes}</span>
        </div>
    )
}

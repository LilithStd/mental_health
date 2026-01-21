import IsFavoritesIcon from "@/public/icons/HeartFull.svg"
import WithOutFavoritesIcon from "@/public/icons/HeartEmpty.svg"

interface FavoritesProps {
    isFavorite: boolean,
    callBackIsFavorite: () => void
}


export default function Favorites({ isFavorite, callBackIsFavorite }: FavoritesProps) {
    // console.log('Favorites component rendered with isFavorite:', isFavorite);
    return (
        <div className="cursor-pointer" onClick={callBackIsFavorite}>
            {isFavorite ? <IsFavoritesIcon width={24} height={24} /> : <WithOutFavoritesIcon width={24} height={24} />}
        </div>
    )
}

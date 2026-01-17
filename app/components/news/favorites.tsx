import IsFavoritesIcon from "@/public/icons/HeartFull.svg"
import WithOutFavoritesIcon from "@/public/icons/HeartEmpty.svg"

interface FavoritesProps {
    isFavorite: boolean
}


export default function Favorites({ isFavorite }: FavoritesProps) {
    return (
        <div>
            {isFavorite ? <IsFavoritesIcon width={24} height={24} /> : <WithOutFavoritesIcon width={24} height={24} />}
        </div>
    )
}

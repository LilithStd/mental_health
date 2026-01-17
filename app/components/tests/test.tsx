import Favorites from "../shared/favorites"
import Form from "./form"

interface TestProps {
    id: string
    name: string
    type: string
    group: string
}


export default function Test({ name, type, group }: TestProps) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Type: {type}</p>
            <span>Group: {group}</span>
            <Form />
            <Favorites isFavorite={false} />
        </div>
    )
}

import { textBaseStyles } from "@/app/globalConsts/globalStyles"

interface TextComponentInterface {
    content?: string
    additionStyles?: string
    callback?: () => void
}
export const TextComponent = ({ content, additionStyles, callback }: TextComponentInterface) => {
    return (
        <p
            className={`${additionStyles} ${textBaseStyles}`}
            onClick={callback}
        >
            {content}
        </p>
    )

}
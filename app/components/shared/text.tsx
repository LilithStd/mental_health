import { textBaseStyles } from "@/app/globalConsts/globalStyles"

interface TextComponentInterface {
    content?: string
    additionStyles?: string
    callback?: () => void
}
export const TextComponent = ({ content, additionStyles, callback }: TextComponentInterface) => {
    <div onClick={callback} className={`${additionStyles}`}>
        <p className={textBaseStyles}>
            {content}
        </p>
    </div>
}
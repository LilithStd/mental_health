import { buttonBaseStyles, indents } from "@/app/globalConsts/globalStyles";

interface ButtonInterface<T = void> {
    content?: string
    additionalStyles?: string
    callBack?: T extends void ? () => void : (argument: T) => void;
}

export default function ButtonComponent({ content, additionalStyles, callBack }: ButtonInterface) {
    return (
        <button
            onClick={callBack}
            className={`${additionalStyles ? additionalStyles : ''} ${buttonBaseStyles}`}
        >{content}
        </button>
    )
}


interface TestModalWindowProps {
    result: string,
    onCloseCallback: () => void
}

export default function TestModalWindow({ result, onCloseCallback }: TestModalWindowProps) {
    return (
        <div>
            <h2>{result}</h2>
            <button onClick={onCloseCallback}>Close</button>
        </div>
    )
}

'use client'



interface ModalWindowUserProblemDescriptionProps {
    closeCallback: () => void,
    coordinates: {
        x: number,
        y: number
    }
}
export default function ModalWindowUserProblemDescription({ closeCallback, coordinates }: ModalWindowUserProblemDescriptionProps) {
    const Modal_Size = {
        width: 200,
        height: 100
    }
    const OffSet = 8
    const safeXcoordinate = Math.min(coordinates.x, window.innerWidth - Modal_Size.width - OffSet);
    const safeYcoordinate = Math.min(coordinates.y, window.innerHeight - Modal_Size.height - OffSet);
    console.log(coordinates);
    return (
        <div className={`flex flex-col gap-4 justify-center z-10 items-center bg-activeElement absolute`}
            style={{ top: `${safeYcoordinate}px`, left: `${safeXcoordinate}px` }}
        >
            <h2>modalWindowUserProblemDescription</h2>
            <button onClick={closeCallback} className={`px-4 py-2 bg-blue-500 text-white rounded-md`}>Close Modal</button>
        </div>
    )
}


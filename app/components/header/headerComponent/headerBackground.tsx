


interface HeaderBackgroundProps {
    children: React.ReactNode;
}


export default function HeaderBackground({ children }: HeaderBackgroundProps) {
    return (
        <div className={`flex max-w-6xl justify-between items-center w-full  bg-subContainer rounded-large`}>
            {children}
        </div>
    )
}

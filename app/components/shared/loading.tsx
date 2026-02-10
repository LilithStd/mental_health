'use client';

type LoadingProps = {
    size?: number;          // размер в px
    fullScreen?: boolean;   // центрировать на весь экран
    text?: string;          // подпись под спиннером
};

export default function Loading({
    size = 40,
    fullScreen = false,
    text,
}: LoadingProps) {
    const spinner = (
        <div className="flex flex-col items-center gap-3">
            <div
                style={{ width: size, height: size }}
                className="
          border-4
          border-accentElement
          border-t-transparent
          rounded-full
          animate-spin
        "
            />
            {text && <span className="text-text text-sm">{text}</span>}
        </div>
    );

    if (fullScreen) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-background/60 backdrop-blur-sm z-50">
                {spinner}
            </div>
        );
    }

    return spinner;
}

// "use client";

// import {
//     useFloating,
//     offset,
//     flip,
//     shift,
//     autoUpdate,
//     FloatingPortal,
//     useDismiss,
//     useInteractions,
//     useRole,
// } from "@floating-ui/react";
// import { useEffect, useRef } from "react";

// type PopoverProps = {
//     reference: HTMLElement | null;
//     open: boolean;
//     onOpenChange: (open: boolean) => void;
//     children: React.ReactNode;
//     placement?: "top" | "bottom" | "left" | "right";
// };

// export function Popover({
//     reference,
//     open,
//     onOpenChange,
//     children,
//     placement = "bottom",
// }: PopoverProps) {
//     const arrowRef = useRef<HTMLDivElement | null>(null);

//     const { refs, floatingStyles, middlewareData, context } = useFloating({
//         open,
//         onOpenChange,
//         placement,
//         middleware: [
//             offset(10),
//             flip(),
//             shift({ padding: 8 }),
//         ],
//         whileElementsMounted: autoUpdate,
//     });

//     // ✅ правильно привязываем reference
//     useEffect(() => {
//         if (reference) {
//             refs.setReference(reference);
//         }
//     }, [reference, refs]);

//     // 🔥 взаимодействия
//     const dismiss = useDismiss(context); // клик вне + esc
//     const role = useRole(context);

//     const { getFloatingProps } = useInteractions([
//         dismiss,
//         role,
//     ]);

//     if (!open) return null;

//     return (
//         <FloatingPortal>
//             <div
//                 ref={refs.setFloating}
//                 style={{
//                     ...floatingStyles,
//                     background: "white",
//                     borderRadius: 12,
//                     padding: 12,
//                     boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
//                     zIndex: 1000,
//                     transition: "opacity 0.15s ease, transform 0.15s ease",
//                 }}
//                 {...getFloatingProps()}
//             >
//                 {children}

//                 {/* 🔺 стрелка */}
//                 <div
//                     ref={arrowRef}
//                     style={{
//                         position: "absolute",
//                         width: 10,
//                         height: 10,
//                         background: "white",
//                         transform: "rotate(45deg)",
//                         left: middlewareData.arrow?.x,
//                         top: middlewareData.arrow?.y,
//                     }}
//                 />
//             </div>
//         </FloatingPortal>
//     );
// }
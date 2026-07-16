// 'use client'
// import { routes } from "@/app/helpers/helpersFunctions";
// import { useLocale } from "@/app/hooks/useLocale";
// import { LocaleType } from "@/app/types/types";
// import { FaqBlockContent } from "@/translate/mainPage/faqBlock";
// import Link from "next/link";
// import FAQElementIcon from "@/public/icons/ClipboardDocumentCheck.svg";


// export default function FaqBlock() {
//     const locale = useLocale() as LocaleType
//     const routesAdaptive = routes(locale)
//     return (
//         <div className={`flex flex-col gap-4 p-6 justify-center items-center bg-primary-color/20 backdrop-blur-md rounded-large text-center border border-primary-color/30 shadow-lg`}>
//             <div className={`flex flex-col gap-4 p-6 w-full justify-center items-center text-center rounded-large `}>
//                 <div className={`flex flex-col gap-4 justify-center items-center`}>
//                     <h2 className={`text-5xl font-bold `}>{FaqBlockContent[locale].title}</h2>
//                     <p className={`italic text-lg`}>{FaqBlockContent[locale].description}</p>
//                 </div>
                

//                 <ul className={`list-disc list-inside mt-4  justify-center flex flex-col gap-2 bg-primary-color/10 rounded-large p-4 border border-primary-color/30 w-fit`}>
//                     {FaqBlockContent[locale].listsQuestions.map((question, index) => (
//                         <li key={index} className={`flex justify-start items-start gap-2`}>
//                             <FAQElementIcon fill={`green`} className={`w-6 h-6`} />
//                             <strong className={`font-bold`}>{question}</strong>

//                         </li>
//                     ))}
//                 </ul>
//             </div>
//             <Link href={routesAdaptive.faq.root} className={`mt-4 px-4 py-2 bg-buttonContainer w-fit rounded-large font-bold`}>{FaqBlockContent[locale].button}</Link>
//         </div>
//     )
// }

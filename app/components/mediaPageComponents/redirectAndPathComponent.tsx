import ReturnButton from "../returnButton";
import Link from "next/link";
import ArrowIcon from '@/public/icons/ArrowRightCircle.svg'

interface RedirectAndPathComponentProps {
  links: { name: string, href: string }[];
  pathToRedirect: string;
}

export default function RedirectAndPathComponent({ links, pathToRedirect }: RedirectAndPathComponentProps) {
  return (
    <div className={`flex w-full justify-start mb-4 z-10`}>
        <ReturnButton pathToReturn={pathToRedirect} />
        <div className={`flex  items-center`}>
            {links.map((link, index) => (
                <div key={index} className={`bg-primary-color/50 cursor-pointer pb-2 pt-2 pl-4 pr-4 rounded-circle`}>
                    <Link href={link.href}>{link.name}</Link>
                    {index < links.length - 1 && <ArrowIcon className="inline-block ml-2 w-6" />}
                </div>
            ))}
        </div>
    </div>
  )
}
 

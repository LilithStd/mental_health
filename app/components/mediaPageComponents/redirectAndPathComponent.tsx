import ReturnButton from "../returnButton";

interface RedirectAndPathComponentProps {
  links: { name: string, href: string }[];
  pathToRedirect: string;
}

export default function RedirectAndPathComponent({ links, pathToRedirect }: RedirectAndPathComponentProps) {
  return (
    <div className={`flex w-full justify-start mb-4 z-10`}>
        <ReturnButton pathToReturn={pathToRedirect} />
        <div className={`flex gap-2 items-center`}>
            {links.map((link, index) => (
                <div key={index} className={`flex gap-2 items-center`}>
                    <a href={link.href}>{link.name}</a>
                </div>
            ))}
        </div>
    </div>
  )
}
 

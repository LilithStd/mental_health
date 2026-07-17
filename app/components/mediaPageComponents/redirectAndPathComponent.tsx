interface RedirectAndPathComponentProps {
  links: { name: string, href: string }[];
  pathToRedirect: string;
}

export default function RedirectAndPathComponent({ links, pathToRedirect }: RedirectAndPathComponentProps) {
  return (
    <div>RedirectAndPathComponent</div>
  )
}


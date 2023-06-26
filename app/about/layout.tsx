import Link from "next/link";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>About usa</h1>
      <ul>
        <li>
          <Link href="/about/contacts">Contact</Link>
        </li>
        <li>
          <Link href="/about/team">Team</Link>
        </li>
      </ul>

      {children}
    </div>
  );
}
{
  /* <Link href="/about/contacts">Contact</Link>; */
}
{
  /* <Link href="/about/team">Team</Link>; */
}

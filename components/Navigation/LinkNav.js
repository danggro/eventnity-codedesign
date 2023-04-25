import Link from "next/link";

export default function LinkNav(props) {
  return (
    <li>
      <Link
        href={props.href}
        className="text-lg font-medium hover:underline font-fredoka"
      >
        {props.children}
      </Link>
    </li>
  );
}

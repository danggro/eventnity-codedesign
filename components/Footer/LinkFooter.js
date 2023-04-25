import Link from "next/link";

export default function LinkFooter(props) {
  return (
    <li>
      <Link
        href={props.href}
        className="text-xs font-medium text-gray-300 hover:underline"
      >
        {props.children}
      </Link>
    </li>
  );
}

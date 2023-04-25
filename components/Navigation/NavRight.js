import Link from "next/link";
import LinkNav from "./LinkNav";
import Button from "../Button";

export default function NavRight() {
  return (
    <div className="flex items-center gap-10">
      <Link
        href={"/"}
        className="text-lg font-medium font-fredoka hover:underline"
      >
        Login
      </Link>
      <Button variant="small">Register</Button>
    </div>
  );
}

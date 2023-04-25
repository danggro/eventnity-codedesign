import LinkNav from "./LinkNav";

export default function NavLink() {
  return (
    <ul className="flex gap-[30px]">
      <LinkNav href="/">Home</LinkNav>
      <LinkNav href="/">Pricing</LinkNav>
      <LinkNav href="/">Event</LinkNav>
      <LinkNav href="/">Resources</LinkNav>
      <LinkNav href="/">Helpdesk</LinkNav>
    </ul>
  );
}

import { getContacts } from "../repository";
import { type Contact } from "@orm/client";

type Props = {
  contacts: Contact[];
};

export default async function ContactList({ contacts }: Props) {
  if (!contacts) return <h1>Empty</h1>;
  return (
    <>
      <ul>
        {contacts.map((c) => (
          <li key={c.id}>{c.firstName}</li>
        ))}
      </ul>
    </>
  );
}

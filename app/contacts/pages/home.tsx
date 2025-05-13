import prisma from "~/common/prisma";
import type { Route } from "../../+types/root";
import { useLoaderData } from "react-router";
import ContactList from "../ui/list";
import { findBySlug, getContacts } from "../repository";
import invariant from "tiny-invariant";

export async function loader({ params }: Route.LoaderArgs) {
  const { slug } = params;
  invariant(slug, "Unknown slug to find");
  const contact = await findBySlug(slug);
  const contacts = await getContacts();
  return { contact, contacts };
}

export default function Contact() {
  const { contact, contacts } = useLoaderData<typeof loader>();
  return (
    <>
      <h1>
        Hello World {contact.firstName} {contact.lastName}{" "}
      </h1>
      <ContactList contacts={contacts} />
      <img src={contact.avatar ?? "hello"} />
    </>
  );
}

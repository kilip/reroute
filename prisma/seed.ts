import { getContacts } from "~/data";
import { PrismaClient, type Contact } from "@orm/client";
import invariant from "tiny-invariant";

const prisma = new PrismaClient();

async function main() {
  const contacts = await getContacts();
  contacts.forEach(async (e) => {
    const contact = {
      firstName: e.first,
      lastName: e.last,
      avatar: e.avatar,
      twitter: e.twitter,
    };

    await prisma.contact.upsert({
      create: {
        slug: e.id,
        ...contact,
      },
      update: contact,
      where: {
        slug: e.id,
      },
    });
    console.log(contact);
  });
}

await main()
  .then(async () => {
    console.log("Success");
    await prisma.$disconnect();
  })
  .catch(async () => {
    console.error("Error");
    await prisma.$disconnect();
  });

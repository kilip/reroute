import prisma from "~/common/prisma";

export async function getContacts() {
  return await prisma.contact.findMany({
    orderBy: { firstName: "asc" },
    take: 10,
  });
}

export async function findBySlug(slug: string) {
  return await prisma.contact.findUniqueOrThrow({
    where: {
      slug,
    },
  });
}

import { prisma } from "@/lib/prisma";
import { error } from "console";
import { Metadata } from "next";

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  return { title: `${user?.name}'s profile!` };
}

export default async function UserProfile({ params }: Props) {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  const { name, bio, image, age } = user ?? {};
  console.log(user);

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <img
          src={image ?? ""}
          alt={`${name}'s profile`}
          width={100}
          className="rounded-full"
        />
        <h1>{name}</h1>
      </div>

      <p>
        <span className="font-bold">Bio:</span> {bio ?? "none"}
      </p>
      <p>
        <span className="font-bold">Age:</span> {age ?? "unknown"}
      </p>
    </div>
  );
}

import FollowButton from "@/components/FollowButton";
import { prisma } from "@/lib/prisma";
import { error } from "console";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

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
  const session = await getServerSession(authOptions);
  const currentUser = session?.user?.email!;

  const user = await prisma.user.findUnique({ where: { id: params.id } });
  const { name, bio, image, age, email } = user ?? {};

  const currentUsersPage = currentUser == user?.email;

  if (currentUsersPage) {
    redirect("/dashboard");
  }

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <img
          src={image ?? "/d.png"}
          alt={`${name}'s profile`}
          width={100}
          className="rounded-full"
        />
        <div>
          <h1>{name}</h1>
          {/* @ts-expect-error Server Component */}
          <FollowButton targetUserId={params.id} />
        </div>
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

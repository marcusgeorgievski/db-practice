import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { ProfileForm } from "./ProfileForm";
import { redirect } from "next/navigation";

type Props = {};

// interface User {
//   name?: any;
//   email?: any;
//   image?: any;
// }

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }

  const currenUserEmail = session?.user?.email!;
  const { image, name } = session?.user!;

  const user = await prisma.user.findUnique({
    where: { email: currenUserEmail },
  });

  console.log(session);

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <img
          src={image ?? ""}
          alt={`${name}'s profile`}
          width={100}
          className="rounded-full"
        />
        <div>
          <h1>{name}</h1>
          <p className="text-slate-500">{currenUserEmail}</p>
        </div>
      </div>

      <ProfileForm user={user} />
    </div>
  );
}

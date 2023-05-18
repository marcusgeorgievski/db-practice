import UserCard from "@/components/UserCard";
import { prisma } from "@/lib/prisma";
type Props = {};

export default async function page({}: Props) {
  const users = await prisma.user.findMany();

  return (
    <div className="grid grid-cols-3">
      {users.map((user) => {
        return (
          <div>
            <UserCard key={user.id} {...user} />
          </div>
        );
      })}
    </div>
  );
}

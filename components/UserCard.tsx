import Link from "next/link";

type Props = {
  id: any;
  name: any;
  age: any;
  image: any;
};

export default function UserCard({ id, name, age, image }: Props) {
  return (
    <div className="overflow-hidden border rounded border-slate-400">
      <img
        src={image ?? "/d.png"}
        alt={`${name}'s profile`}
        className="border border-slate-900 h-[150px] object-cover"
      />
      <div className="p-2">
        <h3 className="font-bold">
          <Link href={`/users/${id}`}>{name}</Link>
        </h3>
        <p className="text-sm text-slate-600">Age: {age ?? "unknown"}</p>
      </div>
    </div>
  );
}

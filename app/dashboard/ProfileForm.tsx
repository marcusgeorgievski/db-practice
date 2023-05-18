"use client";

export function ProfileForm({ user }: any) {
  async function updateUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const body = {
      name: formData.get("name"),
      bio: formData.get("bio"),
      age: formData.get("age"),
      image: formData.get("image"),
    };

    const res = await fetch("/api/user", {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">Edit profile:</h2>

      <form onSubmit={updateUser} className="flex flex-col">
        <label htmlFor="name" className="font-bold">
          Name
        </label>
        <input
          type="text"
          name="name"
          defaultValue={user?.name ?? ""}
          className="mb-2"
        />
        <label htmlFor="bio" className="font-bold">
          Bio
        </label>
        <textarea
          name="bio"
          cols={30}
          rows={10}
          defaultValue={user?.bio ?? ""}
          className="mb-2"
        ></textarea>
        <label htmlFor="age" className="font-bold">
          Age
        </label>
        <input
          type="text"
          name="age"
          defaultValue={user?.age ?? 0}
          className="w-8 p-1 mb-2"
        />
        <label htmlFor="image" className="font-bold">
          Profile Image URL
        </label>
        <input
          type="text"
          name="image"
          defaultValue={user?.image ?? ""}
          className="mb-2"
        />

        <button type="submit">Save</button>
      </form>

      <style jsx>{`
        input,
        textarea {
          border: solid rgb(217, 217, 217) 1px;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}

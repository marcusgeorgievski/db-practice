import { Metadata } from "next";

export const metadata: Metadata = { title: "About page" };

type Props = {};

export default function About({}: Props) {
  return (
    <div>
      <h1>About</h1>
      <p>This is the most ever</p>
    </div>
  );
}

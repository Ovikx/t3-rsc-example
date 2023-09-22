import Image from "next/image";
import Link from "next/link";
import { Uppercaser } from "./Uppercaser";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Uppercaser />
    </main>
  );
}

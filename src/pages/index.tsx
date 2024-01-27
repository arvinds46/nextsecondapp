import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  return (
    <>
    <Head>
      <title>Next App</title>
    </Head>
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>Hello From Next JS</h1>
      <h2>Router Current Path: {router.pathname}</h2>
    </main>
    </>
  );
}

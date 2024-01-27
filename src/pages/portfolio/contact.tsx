import Head from "next/head";
import Link from "next/link";

export default function Contact() {
    return(<>
        <Head>
                <title>Personal Portfolio</title>
        </Head>
        <h1>Contact Us</h1>
        <Link href="mailto:arvind.bs@outlook.in">arvind.bs@outlook.in</Link>
    </>);
}
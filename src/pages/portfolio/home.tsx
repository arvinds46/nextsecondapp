import Head from "next/head";
import Link from "next/link";

export default function Portfolio() {
    return(<>
    <Head>
            <title>Personal Portfolio</title>
        </Head>
        <h1>Hello!! This is Arvind BS</h1>
        <h2>My Projects</h2>
        <Link href="projects">Project 1</Link>
    </>);
}
import Head from "next/head";
import { useRouter } from "next/router";
import { generateTitle } from "./generatetitle";

const about=()=>{

    const router = useRouter();
    const title = generateTitle(router.pathname);
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <h1>My About Page</h1>
        </>
    );
}

export default about;
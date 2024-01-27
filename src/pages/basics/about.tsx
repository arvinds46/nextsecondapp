import Head from "next/head";
import { useRouter } from "next/router";
const generateTitle=(pathname:any)=>{
    switch (pathname) {
        case '/basics/about':
            return 'About Us'
        default:
            return 'My App'
    }
}

const About=()=>{

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

export default About;
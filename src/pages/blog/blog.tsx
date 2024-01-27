import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

const Blog=()=>{
    const [posts,setPost] = useState([]);

    const fetchPosts=async()=>{
        try {
            const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
            const json = await resp.json();
            setPost(json);
        } catch (error) {
            console.log("Error Occured", error);
        }
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    return (<>
        <Head>
            <title>Blog List</title>
        </Head>
        <h1>Blog List</h1>
        <ul className="list-disc">
                {
                    posts.map((post) => {
                        return(
                            <li key={post.id}>
                                <h2><Link href={`${post.id}`}>{post.id} {post.title}</Link></h2>
                            </li>
                        )
                    })
                }
        </ul>
        </>);
}

export default Blog;
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
interface MyInterface {
    id: string;
    title: string;
    body: string;
}
interface DataType {
    email: string;
    body: string;
}
const BlogDetail=()=>{
    const router = useRouter();
    const slug = router.query.slug;
    const [post,setPost] = useState<MyInterface>({id:'',title:'',body:''});
    const [comments,setComment] = useState<Array<DataType>>([]);
    const fetchPosts=async()=>{
        try {
            const resp = await fetch('https://jsonplaceholder.typicode.com/posts/'+slug);
            const json = await resp.json();
            setPost(json);
        } catch (error) {
            console.log("Error Occured", error);
        }
    }
    const fetchComments=async()=>{
        try {
            const resp = await fetch('https://jsonplaceholder.typicode.com/posts/'+slug+'/comments');
            const json = await resp.json();
            setComment(json);
        } catch (error) {
            console.log("Error Occured", error);
        }
    }
    useEffect(() => {
        fetchPosts();
        fetchComments();
    }, [fetchPosts, fetchComments]);
    return (<>
        <Head>
            <title>Blog Details</title>
        </Head>
        <h1>Blog Details</h1>
        <ul className="list-disc">
            <li key={post.id}>
                <h2>{post.id} {post.title}</h2>
                <p>{post.body}</p>
                <div className="antialiased mx-auto max-w-screen-sm">
                    <h3 className="mb-4 text-lg font-semibold text-gray-900">Comments</h3>

                    <div className="space-y-4">
                {
                    comments.map((comment) => {
                        return(
                            <div className="flex">
                                <div className="flex-shrink-0 mr-3">
                                    <Image alt="" className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10" src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"></Image>
                                </div>
                                <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                                    <strong>{comment.email}</strong> <span className="text-xs text-gray-400">3:34 PM</span>
                                    <p className="text-sm">{comment.body}</p>
                                    <div className="mt-4 flex items-center">
                                        <div className="flex -space-x-2 mr-2">
                                            <Image alt="" className="rounded-full w-6 h-6 border border-white" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"></Image>
                                            <Image alt="" className="rounded-full w-6 h-6 border border-white" src="https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"></Image>
                                        </div>
                                        <div className="text-sm text-gray-500 font-semibold">
                                            5 Replies
                                        </div>         
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
                            </div>
            </li>
        </ul>
        </>);
}

export default BlogDetail;
import React from 'react';
import getAllPosts from "@/app/utils/getAllPosts";
import Link from "next/link";


const Blog = async () => {

    const posts = await getAllPosts();
    // console.log(posts)
    return (
        <div>
            <div className="container mx-auto my-16 p-9">
                <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {
                        posts.map((item,index)=>{
                            return (
                                <Link key={index.toString()} href={"/blogs/"+item['id']} className="card w-100 glass">
                                    <figure><img src={item['img']} alt={item['title']}/></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{item['title']}</h2>
                                        <p>{item['short']}</p>
                                    </div>
                                </Link>
                            )
                        })
                    }


                </div>
            </div>

        </div>
    );
};

export default Blog;
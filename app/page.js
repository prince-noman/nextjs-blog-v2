import Image from 'next/image'
import Team from "@/app/components/Team";
import Header from "@/app/components/Header";
import getAllPosts from "@/app/utils/getAllPosts";
import Link from "next/link";
import React from "react";

export default async function Home() {
    const posts = await getAllPosts();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

        <Header/>
        {/*Blogs Section*/}

        <div>
            <div className="container mx-auto my-16 p-9">
                <h1 className="xl:text-4xl text-3xl text-center text-gray-800 dark:text-white font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">Our Blogs</h1>
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
        {/*Blogs Section*/}
        <Team/>

    </main>
  )
}

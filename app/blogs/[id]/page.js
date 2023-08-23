import React from 'react';
import getSinglePost from "@/app/utils/getSinglePost";

const SingleBlog = async ({params}) => {
    const id = params.id
    const post = await getSinglePost(id)

    return (
        <div className="container mx-auto my-16 p-9">
            <div className="grid p-x-9 grid-cols-1 mt-2 md:grid-cols-1 lg:grid-cols-1">
                <div className="card w-100 glass">
                    <figure><img src={post['postDetails']['img']} alt="car!"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">{post['postDetails']['title']}</h2>
                        <p>{post['postDetails']['content']}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import moment from 'moment';
import { getRecentPosts, getSimilarPosts } from '../services';

export const PostWidget = ({categories, slug}) => {


    const [relatedPosts, setRelatedPosts] = useState([]);
    
    useEffect(() => {

        if (slug) {
            getSimilarPosts(categories, slug)
                .then((result) => setRelatedPosts(result))
        } else {
            getRecentPosts()
                .then((result) => setRelatedPosts(result))
        }

    }, [slug])

    console.log(relatedPosts)

    return(
        <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
            <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
                {slug? 'Podobné' : 'Nejnovější'}
            </h3>
            {relatedPosts.map((post) => (

                <div key={post.title} className='flex items-center w-full mb-4'>
                    <div className="w-16 flex-none">

                        <img 
                            src={post.featuredImage.url}
                            height="60px"
                            width="60px"
                            className='aling-middle rounded-full' 
                            alt={post.title}
                        />

                    </div>
                    <div className="flex-grow ml-4 ">
                        <p className='gr-700 font-xs'>
                           
                            {moment(post.createdAt).format('DD. MM. YYYY')}

                        </p>
                        <Link href={`/post/${post.slug}`} key={post.title} className='text-md'>
                            {post.title}
                        </Link>
                    </div>
                </div>

            ))}
        </div>
    )

}

export default PostWidget;
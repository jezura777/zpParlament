import React, { useContext, useState, useEffect } from 'react'
import { getCategories } from '../services';
import Link from 'next/link'




function Header() {

    const [categories, setCategories] = useState([])

    useEffect(() => {

        getCategories()
            .then((newCategories) => setCategories(newCategories))

    }, []);

    return (
        <div className='container mx-auto bx-auto mb-8'>
            <div className="border-b w-full inline-block border-blue-400 py-8">
                <div className="md:float-left block">
                    <Link href="/">
                        <span className="cursor-pointer font-bold text-4xl text-white flex gap-2">
                            <img
                                height="32px"
                                width="42px"
                                className='align-middle rounded-sm'
                                src="./logo.png"
                                alt="logo žákovského parlamentu slavičín vlára"
                            />

                            Objevit
                        </span>
                    </Link>
                </div>
                <div className='hidden md:float-left md:contents'>
                    {categories.map((category) => (
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">

                                {category.name}

                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Header

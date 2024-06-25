import React from 'react'
import Heading from '../Shared/Heading'
import img1 from "../../assets/blogs/blog-1.jpg"
import img2 from "../../assets/blogs/blog-2.jpg"
import img3 from "../../assets/blogs/blog-3.jpg"


const BlogData = [
    {
        id: 1,
        title: "How To Choose smartWatch",
        subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In neque unde velit non quidem quis voluptates distinctio qui voluptas, quos ipsum sunt saepe dolorem, nam iure commodi nesciunt similique! Blanditiis?",
        published: "Jan 20, 2024 by Dilshad",
        image: img1,
        aosDelay: "0"
    },
    {
        id: 2,
        title: "How To Choose Perfect Gadget",
        subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In neque unde velit non quidem quis voluptates distinctio qui voluptas, quos ipsum sunt saepe dolorem, nam iure commodi nesciunt similique! Blanditiis?",
        published: "Jan 20, 2024 by Satya",
        image: img2,
        aosDelay: "200"
    },
    {
        id: 31,
        title: "How To Choose VR headset",
        subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In neque unde velit non quidem quis voluptates distinctio qui voluptas, quos ipsum sunt saepe dolorem, nam iure commodi nesciunt similique! Blanditiis?",
        published: "Jan 20, 2024 by Ponhad",
        image: img3,
        aosDelay: "400"
    },
]

const Blog = () => {
    return (
        <div className='my-12'>
            <div className="container">
                {/* Header */}
                <Heading title={'Recent News'} subTitle={"Explore Our Blogs"}/>

                {/* Body Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
                    {
                        BlogData.map((data) => (
                            <div 
                                data-aos="fade-up"
                                data-aos-delay={data.aosDelay}
                            key={data.id} className='bg-white dark:bg-gray-900'>
                                {/* Image */}
                                <div className='overflow-hidden rounded-2xl mb-2'>
                                    <img src={data.image} alt="" className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500'/>
                                </div>
                                {/* Content */}
                                <div className='space-y-2'>
                                    <p className='text-xs text-gray-500'>{data.published}</p>
                                    <p className='font-bold line-clamp-1'>{data.title}</p>
                                    <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400'>{data.subTitle}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Blog

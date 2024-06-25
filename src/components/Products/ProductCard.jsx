import React from 'react'
import Button from '../Shared/Button'

const ProductCard = ({data}) => {
    return (
        <div className='mb-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center'>
                {data.map((product) => (
                    <div key={product.id} 
                        data-aos="fade-up"
                        data-aos-delay={data.aosDelay}
                        className='group'>
                        <div

                        className='relative'>
                            <img src={product.image} 
                                className='h-[180px] w-[260px] object-cover rounded-md'
                            />
                            <div className='hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full h-full text-center group-hover:backdrop-blur-sm justify-center items-center place-items-center duration-200'>
                                <Button text={"Add To Cart"} bgColor={'bg-primary'} textColor={"text-white"}/>
                            </div>
                        </div>
                        <div className='leading-7'>
                            <h2 className='font-semibold'>{product.title}</h2>
                            <h2 className='font-bold'>${product.price}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductCard

import React from 'react'
import ProductCard from './product-card'

interface Product {
	name: string
	slug: string
	category: string
	description: string
	images: string[]
	price: number
	brand: string
	rating: number
	numReviews: number
	stock: number
	isFeatured: boolean
	banner: string | null
}

interface Props {
	data: Product[]
	title?: string
	limit?: number | null
}

export default function ProductList({ data, title = '', limit=null }: Props) {
	const limitedData = limit ? data.slice(0, limit) : data 
	return (
		<div className='my-10'>
			<h2 className='h2-bold mb-4'>{title}</h2>
			{data.length ? (
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
					{limitedData.map(product => (
					<ProductCard key={product.slug} product={product}/>
					))}
				</div>
			) : (
				<div>
					<p>No products found</p>
				</div>
			)}
		</div>
	)
}

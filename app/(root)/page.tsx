import ProductList from '@/components/shared/product/product-list'
import sampleData from '@/db/sample-data'

import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Home',
}


export default function Home() {
	console.log("dupa jasiu")
	return <>
	  <ProductList data={sampleData.products} title="Newest Arrivals" limit={4}/>
	</>
}

import { Metadata, ResolvingMetadata } from 'next'
import { redirect } from 'next/navigation'

import ProductDetail from '@/components/Product/ProductDetail'
import ProductList from '@/components/Product/ProductList'
import { Product } from '@/entities/product'
import fetchJson from '@/libs/fetch-json'

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params }: Props,
  _?: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id
  const baseUrl = process.env.NEXT_PUBLIC_API_URL

  const product = await fetch(`${baseUrl}/id/${id}/info`).then((res) =>
    res.json()
  )

  return {
    title: `Product by ${product.author}`
  }
}

export default async function ProductDetailPage({ params }: any) {
  const { id } = params
  if (!id) {
    redirect('/')
  }

  const product: Product | any = await fetchProducts()

  async function fetchProducts() {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL

      const result = (await fetchJson(`${baseUrl}/id/${id}/info`)) as any

      if (result?.id) {
        return {
          id: Number(result.id),
          commission: Math.floor(Math.random() * 10),
          sku: Math.random().toString(36).slice(6).toUpperCase(),
          name: `Product by ${result.author}`,
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta eos expedita quis perspiciatis dicta qui magni?',
          price: Math.floor(Math.random() * 1000000),
          quantity: Math.floor(Math.random() * 100),
          image: result.download_url
        }
      }
    } catch (error) {
      console.error(error)
    }

    return
  }

  if (!product) {
    redirect('/')
  }

  return (
    <div className="container">
      <ProductDetail product={product} />
      <div className="mt-md">
        <ProductList type={1} />
      </div>
    </div>
  )
}

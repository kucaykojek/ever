'use client'

import { useEffect, useState } from 'react'

import { Product } from '@/entities/product'
import { useScroll } from '@/hooks/document'
import fetchJson from '@/libs/fetch-json'

import ProductCard from './ProductCard'
import ProductCardSkeleton from './ProductCardSkeleton'
import './ProductList.scss'

/* eslint no-unused-vars: 0, unused-imports/no-unused-vars: 0 */
export enum PropsType {
  catalog,
  related
}

export default function ProductList({
  type = PropsType.catalog
}: {
  type: PropsType
}) {
  const limit = PropsType.catalog ? 10 : 4
  const [page, setPage] = useState<number>(2)
  const [products, setProducts] = useState<Product[]>([])
  const [fetching, setFetching] = useState<boolean>(true)
  const [hasReachMax, setHasReachMax] = useState<boolean>(false)
  const { fromBottom } = useScroll()

  useEffect(() => {
    fetchProducts()
  }, [])

  useEffect(() => {
    if (type == PropsType.catalog && !hasReachMax && fromBottom <= 60) {
      setPage(page + 1)
    }
  }, [fromBottom])

  useEffect(() => {
    fetchProducts()
  }, [page])

  async function fetchProducts() {
    setFetching(true)

    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL

      const result = (await fetchJson(
        `${baseUrl}/v2/list?page=${page}&limit=${limit}`
      )) as any

      if (result.length > 0) {
        const mappedProducts = result.map((value: any, index: number) => ({
          id: Number(value.id),
          commission: index % 2 ? Math.floor(Math.random() * 10) : 0,
          sku: Math.random().toString(36).slice(6).toUpperCase(),
          name: `Product by ${value.author}`,
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta eos expedita quis perspiciatis dicta qui magni?',
          price: Math.floor(Math.random() * 1000000),
          quantity: Math.floor(Math.random() * 100),
          image: `${baseUrl}/id/${value.id}/400/400`
        }))

        setProducts([...products, ...mappedProducts])
      }

      if (result.length < limit) {
        setHasReachMax(true)
      }
    } catch (error) {
    } finally {
      setFetching(false)
    }
  }

  return (
    <div className="product-list container">
      <h2>
        {type === PropsType.catalog ? 'Our Products' : 'Related Products'}
      </h2>
      <div className="product-list-wrapper">
        {products.map((product, productIndex) => (
          <ProductCard key={`product-item-${productIndex}`} product={product} />
        ))}
        {fetching &&
          [...Array(4)].map((_, index) => (
            <ProductCardSkeleton key={`skeleton-${index}`} />
          ))}
      </div>
    </div>
  )
}

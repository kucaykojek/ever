import { Heart, Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Product } from '@/entities/product'
import { formatNumber } from '@/libs/formatter'

import './ProductCard.scss'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="product-card">
      {product.commission > 0 && (
        <div className="product-card__commission">
          {formatNumber(product.commission, '0,0')}%
        </div>
      )}
      <Link href={`/product/${product.id}`}>
        <Image
          alt={product.name}
          src={product.image}
          width={400}
          height={400}
          className="product-card__image"
        />
      </Link>
      <div className="product-card__price">
        {formatNumber(product.price, '$0,0')}
      </div>
      <div className="product-card__name">
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </div>
      <div className="product-card__action">
        <button type="button" className="product-card__action-cart">
          <Plus className="mr-xs" />
          Keranjang
        </button>
        <button type="button" className="product-card__action-love">
          <Heart />
        </button>
      </div>
    </div>
  )
}

'use client'

import {
  Expand,
  Heart,
  Minus,
  Plus,
  Share2,
  ShoppingBasket,
  Star
} from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

import { Product } from '@/entities/product'
import { formatNumber } from '@/libs/formatter'

import './ProductDetail.scss'

export default function ProductDetail({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState<number>(1)

  return (
    <div className="product-detail">
      <div className="product-detail__top">
        <Image
          alt={product.name}
          src={product.image}
          width={400}
          height={400}
          className="product-detail__image"
        />
        <div className="product-detail__action">
          <button
            type="button"
            className="product-detail__action-icon product-detail__action-icon--love"
          >
            <Heart />
          </button>
          <button
            type="button"
            className="product-detail__action-icon product-detail__action-icon--share"
          >
            <Share2 />
          </button>
          <button
            type="button"
            className="product-detail__action-icon product-detail__action-icon--expand"
          >
            <Expand />
          </button>
        </div>
      </div>
      <div className="product-detail__body">
        <div className="product-detail__content">
          <div className="product-detail__name">{product.name}</div>
          <div className="product-detail__meta">
            {product.commission > 0 && (
              <div className="product-detail__commission">
                Komisi {formatNumber(product.commission, '0,0')}%
              </div>
            )}
            <div className="product-detail__rating">
              {[...Array(4)].map((_, index) => (
                <Star key={`rating-${index}`} className="fg-warning" />
              ))}
              <Star className="fg-muted" />
            </div>
          </div>

          <div className="product-detail__price">
            {formatNumber(product.price - (20 / 100) * product.price, '$0,0')}
            <span
              className="fg-error text-base ml-md"
              style={{ textDecoration: 'line-through' }}
            >
              {formatNumber(product.price, '$0,0')}{' '}
            </span>
          </div>

          <div className="product-detail_description">
            <div className="text-lg mb-xs" style={{ fontWeight: 500 }}>
              Deskripsi
            </div>
            <p className="mb-base">
              Lorem ipsum dolor sit amet, pariatur commodo veniam consectetur do
              sint. Aute in ut amet culpa fugiat excepteur deserunt dolore irure
              irure adipisicing enim velit amet voluptate eiusmod deserunt
              consectetur. Ad labore laboris officia exercitation ea veniam
              eiusmod tempor mollit. Excepteur proident et laboris est aute sint
              minim incididunt ad nisi commodo. Elit nisi reprehenderit ad ipsum
              nostrud et et. Exercitation duis sit culpa.
            </p>
            <p className="mb-base">
              Tempor sunt nostrud nulla nulla. Fugiat laborum consequat quis
              laborum ut aute exercitation dolor fugiat dolor culpa et. Nulla
              aute consectetur deserunt adipisicing nostrud consequat sint
              incididunt incididunt sunt ipsum in dolor nostrud.
            </p>
            <p className="mb-base">
              Tempor sunt nostrud nulla nulla. Fugiat laborum consequat quis
              laborum ut aute exercitation dolor fugiat dolor culpa et. Nulla
              aute consectetur deserunt adipisicing nostrud consequat sint
              incididunt incididunt sunt ipsum in dolor nostrud.
            </p>
          </div>
        </div>
        <div className="product-detail__selection">
          <div className="product-detail__selection-variant">
            <div className="text-base mb-xs" style={{ fontWeight: 500 }}>
              Ukuran
            </div>
            <div className="variant-selection">
              <a className="label ml-sm">Size XS</a>
              <a className="label">Size S</a>
              <a className="label">Size M</a>
              <a className="label">Size L</a>
              <a className="label">Size XL</a>
              <a className="label">Size XXL</a>
            </div>
          </div>
          <div className="product-detail__selection-color mt-base">
            <div className="text-base mb-xs" style={{ fontWeight: 500 }}>
              Warna
            </div>
            <a
              className="display-inline-block radius-circle"
              style={{ width: '2rem', height: '2rem', background: '#FAF3F0' }}
            ></a>
            <a
              className="display-inline-block radius-circle ml-sm"
              style={{ width: '2rem', height: '2rem', background: '#D4E2D4' }}
            ></a>
            <a
              className="display-inline-block radius-circle ml-sm"
              style={{ width: '2rem', height: '2rem', background: '#FFCACC' }}
            ></a>
            <a
              className="display-inline-block radius-circle ml-sm"
              style={{ width: '2rem', height: '2rem', background: '#DBC4F0' }}
            ></a>
          </div>
          <div className="product-detail__selection-quantity mt-base">
            <div className="text-base mb-xs" style={{ fontWeight: 500 }}>
              Jumlah
            </div>
            <div className="quantity-selection">
              <button
                type="button"
                disabled={quantity === 1}
                onClick={() => setQuantity(quantity - 1)}
              >
                <Minus />
              </button>
              <input
                type="number"
                min={1}
                max={product.quantity}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
              <button
                type="button"
                disabled={quantity >= product.quantity}
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus />
              </button>
            </div>
          </div>
          <div className="product-detail__selection-add-to-cart mt-lg">
            <button type="button">
              <ShoppingBasket className="mr-sm" /> Tambah Ke Keranjang
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

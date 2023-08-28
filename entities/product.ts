export interface Product {
  id: number | string
  sku: string
  name: string
  description: string
  price: number
  quantity: number
  image: string
  commission: number
  variants?: ProductVariant[]
  spesifications?: ProductSpesification[]
}

export interface ProductVariant {
  id: number | string
  name: string
  price: number
  description: string
}

export interface ProductSpesification {
  id: number | string
  name: string
  value: number
}

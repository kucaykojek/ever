import './ProductCardSkeleton.scss'

export default function ProductCardSkeleton() {
  return (
    <div className="product-card-skeleton">
      <div className="product-card-skeleton__image"></div>
      <div className="px-base pb-base">
        <div className="product-card-skeleton__item"></div>
        <div className="product-card-skeleton__item"></div>
      </div>
    </div>
  )
}

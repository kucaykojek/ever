import Brand from '@/components/Landing/Brand'
import LandingHero from '@/components/Landing/Hero'
import ProductList from '@/components/Product/ProductList'

export default function Home() {
  return (
    <div>
      <LandingHero />
      <Brand />
      <ProductList type={0} />
    </div>
  )
}

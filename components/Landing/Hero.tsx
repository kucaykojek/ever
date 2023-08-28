import Image from 'next/image'

import './Hero.scss'

export default function LandingHero() {
  return (
    <div className="landing-hero">
      <div className="container">
        <div className="landing-hero__content">
          <h1>
            Buka Usaha Online cuma Modal HP{' '}
            <div className="fg-primary mt-sm">#MudahBukaUsaha</div>
          </h1>
          <p>
            Usaha online tanpa modal dan gratis belajar bisnis dipandu tim
            berpengalaman.
          </p>
          <p className="mt-lg">
            <a className="button">Mulai Jualan Yuk</a>
          </p>
        </div>

        <Image
          src="/image-hero.webp"
          width={603}
          height={413}
          alt=""
          className="landing-hero__image"
        />
      </div>
    </div>
  )
}

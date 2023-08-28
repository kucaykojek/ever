'use client'

import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

import './Brand.scss'

export default function LandingBrand() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  }

  const brands = [
    'avoskin',
    'hanasui',
    'msglow',
    'reglow',
    'scarlett',
    'somethinc',
    'wardah'
  ]
  return (
    <div className="landing-brand">
      <h2>Featured Brands</h2>
      <Slider {...settings}>
        {...brands.map((val, idx) => (
          <Image
            key={`brand-item-1-${idx}`}
            src={`/brand/${val}.png`}
            width={600}
            height={400}
            alt=""
            className="landing-brand__image"
          />
        ))}
        {...brands.map((val, idx) => (
          <Image
            key={`brand-item-2-${idx}`}
            src={`/brand/${val}.png`}
            width={600}
            height={400}
            alt=""
            className="landing-brand__image"
          />
        ))}
      </Slider>
    </div>
  )
}

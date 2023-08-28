import Image from 'next/image'

export default function Loading() {
  return (
    <div className="page-loader">
      <Image src="/logo.png" width={421} height={96} alt="evermos" />
    </div>
  )
}

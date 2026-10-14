import { useState } from 'react'

export default function ProductImages({ images = [], name }) {
  const gallery = images.length ? images : ['/images/logo/coffira-logo-mark.svg']
  const [active, setActive] = useState(0)

  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-2">
        {gallery.map((src, i) => (
          <button
            key={src + i}
            onClick={() => setActive(i)}
            className={`h-16 w-16 overflow-hidden rounded-md border ${
              active === i ? 'border-brand-rust' : 'border-brand-tan/30'
            }`}
          >
            <img src={src} alt={`${name} thumbnail ${i + 1}`} className="h-full w-full object-contain bg-brand-creamAlt" />
          </button>
        ))}
      </div>
      <div className="flex-1 aspect-square rounded-lg bg-brand-creamAlt overflow-hidden">
        <img src={gallery[active]} alt={name} className="h-full w-full object-contain" />
      </div>
    </div>
  )
}

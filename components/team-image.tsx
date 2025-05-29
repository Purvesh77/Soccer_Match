"use client"

interface TeamImageProps {
  src: string
  alt: string
  className?: string
}

export default function TeamImage({ src, alt, className }: TeamImageProps) {
  return (
    <img
      src={src || "/placeholder.svg"}
      alt={alt}
      className={className}
      onError={(e) => {
        const target = e.target as HTMLImageElement
        target.src = "/placeholder.svg?height=40&width=40"
      }}
    />
  )
}

import React from 'react'

type ObjectFitTailwindcss =
  | 'object-contain'
  | 'object-cover'
  | 'object-fill'
  | 'object-scale-down'

interface ImageProp {
  imgSrc: string
  width: string
  height: string
  objectFit?: ObjectFitTailwindcss
  onClick?: (e: React.MouseEvent<HTMLImageElement>) => void
}

export const Image = ({
  imgSrc,
  width,
  height,
  objectFit = 'object-contain',
  onClick,
}: ImageProp) => {
  return (
    <img
      className={`${objectFit} ${width} ${height} ${
        onClick && 'cursor-pointer'
      }`}
      src={imgSrc}
      onClick={onClick}
    />
  )
}

import React from 'react'

type ObjectFitTailwindcss =
  | 'object-contain'
  | 'object-cover'
  | 'object-fill'
  | 'object-scale-down'

interface ImageComponent {
  imgSrc: string
  round?: boolean
  width: string
  height: string
  objectFit?: ObjectFitTailwindcss
  onClick?: (e: React.MouseEvent<HTMLImageElement>) => void
}

export const Image = ({
  imgSrc,
  width,
  height,
  round = false,
  objectFit = 'object-contain',
  onClick,
}: ImageComponent) => {
  return (
    <img
      className={`${objectFit} ${width} ${height} ${
        round ? 'rounded-full' : ''
      } ${onClick ? 'cursor-pointer' : ''}`}
      src={imgSrc}
      onClick={onClick}
    />
  )
}

interface RoundImageComponent {
  imgSrc: string
}

export const RoundImage = ({ imgSrc }: RoundImageComponent) => {
  return (
    <Image
      imgSrc={imgSrc}
      round={true}
      width="w-[42px]"
      height="h-[42px]"
      objectFit="object-cover"
    />
  )
}

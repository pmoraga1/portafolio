import Image from "next/image"

export const DevImg = ({containerStyles, imgSrc}) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority alt='' />
      </div>
  )
}

export default DevImg

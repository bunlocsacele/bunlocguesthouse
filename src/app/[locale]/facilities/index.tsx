import Image from 'next/image'

export default function Amenities() {
    return (
        <Image
            src="/images/homeCarousel/room1.jpeg"
            alt="Room"
            width={1080}
            height={720}
            quality={75}
        />
    )
}
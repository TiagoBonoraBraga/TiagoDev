import Image from "next/image";
import Background from '@/public/images/background.svg'

export default function Back() {
return(
    <Image
        src={Background}
        alt="Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center" 
        className="z-10"   
    />
)
}
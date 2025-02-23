import Image from "next/image"
import loader from '@/assets/loader.gif'

export default function Loading() {
	return <div className="flex h-screen justify-center items-center w-full"><Image src={loader} height={150} width={150} alt='Loading...'/></div>
}

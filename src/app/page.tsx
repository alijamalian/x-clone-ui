'use client'
import Image from '@/components/Image'
import { IKImage } from 'imagekitio-next'

const Homepage = () => {
	return (
		<div className="relative w-[600px] h-[600px]">
			<Image path="general/post.jpeg" alt="test post" w={600} h={600} />
		</div>
	)
}

export default Homepage

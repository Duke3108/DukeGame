import { useRef, useState } from "react"
import { TiLocationArrow } from "react-icons/ti"

const BentoTilt = ({ children, className='' }) => {
    const [transformStyle, setTransformStyle] = useState('')
    const itemRef = useRef()

    const handleMouseMove = (e) => {
        if(!itemRef.current) return
        const {left, top, width, height} = itemRef.current.getBoundingClientRect()
        const relativeX =(e.clientX - left) / width
        const relativeY = (e.clientY - top) / height

        const tiltX = (relativeY - 0.5) * 5
        const tiltY = (relativeX - 0.5) * -5

        const newTransform = `perspective(700px) rotateX(${tiltY}deg) rotateY(${tiltX}deg) scale3d(0.98, 0.98, 0.98)`
        setTransformStyle(newTransform)
    }

    const handleMouseLeave = () => {
        setTransformStyle('')
    }
    return (
        <div 
            className={`${className} cursor-default`}
            ref={itemRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{transform: transformStyle}}
        >
            {children}
        </div>
    )
}

const BentoCard = ({ src, title, description }) => {
    return (
        <div className="relative size-full">
            <video
                src={src}
                loop
                muted
                autoPlay
                className="absolute top-0 left-0 object-cover object-center size-full"
            />
            <div className="relative z-10 flex flex-col justify-between p-5 size-full text-blue-50">
                <div>
                    <h1 className="bento-title special-font">{title}</h1>
                    {description && (
                        <p className="mt-3 text-xs max-w-64 md:text-base">{description}</p>
                    )}
                </div>
            </div>
        </div>
    )
}

const Features = () => {
    return (
        <section className='bg-black pb-52'>
            <div className='container px-3 mx-auto md:px-10'>
                <div className='px-5 py-32'>
                    <p className='text-lg font-circular-web text-blue-50'>
                        Bên trong thế giới game DukeWorld
                    </p>
                    <p className='max-w-md text-lg opacity-50 font-circular-web text-blue-50'>
                        Đắm chìm vào vũ trụ game rộng lớn, khám phá những điều mới lạ tạo nên một trải nghiệm chơi game sống động kết nối tất cả mọi người trên thế giới.
                    </p>
                </div>

                <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
                    <BentoCard
                        src="/videos/feature-1.mp4"
                        title={<>radia<b>n</b>t</>}
                        description="Một ứng dụng trò chơi đa nền tảng, biến các hoạt động trên game của bạn trở thành một phiêu lưu kì thú."
                    />
                </BentoTilt>

                <div className="h-[135vh] gap-7 flex flex-col md:flex-row">
                    <BentoTilt className="flex-1 bento-tilt_1">
                        <BentoCard
                            src="/videos/feature-2.mp4"
                            title={<>zig<b>m</b>a</>}
                            description="Bộ sưu tập NFT được lấy cảm hứng từ anime - Trò chơi chuẩn bị được mở rộng."
                        />
                    </BentoTilt>

                    <div className="flex flex-col flex-1 gap-7">
                    <BentoTilt className="flex-1 bento-tilt_1 ms-32 md:ms-0">
                        <BentoCard
                            src="/videos/feature-3.mp4"
                            title={<>n<b>e</b>xus</>}
                            description="Một xã hội game thu nhỏ, tạo ra xu hướng mới cho thị trường trò chơi, tương tác giữa các cộng đồng game."
                        />
                    </BentoTilt>

                    <BentoTilt className="flex-1 bento-tilt_1 me-14 md:me-0">
                        <BentoCard
                            src="/videos/feature-4.mp4"
                            title={<>az<b>u</b>l</>}
                            description="Một AI xuyên thế giới - nâng cấp lối chơi của bạn trở nên thú vị và hiệu quả."
                        />
                    </BentoTilt>
                    </div>
                </div>

                <div className="flex mt-7 gap-7 ">
                <BentoTilt className="flex-1 bento-tilt_2 ">
                    <div className="flex flex-col justify-between w-full p-5 rounded-md size-full bg-violet-300">
                        <h1 className="text-black bento-title special-font max-w-64">M<b>o</b>re co<b>m</b>ing s<b>o</b>on!</h1>
                        <TiLocationArrow className="m-5 scale-[5] self-end"/>
                    </div>
                </BentoTilt>

                <BentoTilt className="flex-1 bento-tilt_2">
                    <video
                        src="/videos/feature-5.mp4"
                        loop
                        muted
                        autoPlay
                        className="object-cover object-center size-full"
                        />
                    </BentoTilt>
                </div>
            </div>
        </section>
    )
}

export default Features
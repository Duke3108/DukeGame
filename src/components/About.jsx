import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import AnimatedTitle from './AnimatedTitle'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger:{
                trigger: '#clip',
                start: 'center center',
                end: '+=800 center',
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            }
        })

        clipAnimation.to('.mask-clip-path', {
            width: '100vw',
            height: '100vh',
            borderRadius: 0
        })
    })
  return (
    <div id='about' className='w-screen min-h-screen'>
        <div className='relative flex flex-col items-center gap-5 mb-8 mt-35'>
            <h2 className='font-general text-md uppercase md-text-[10px]'>
                Welcome to the Duke World
            </h2>
            <AnimatedTitle title={"Disc<b>0</b>ver the world's<br/>L<b>a</b>rgest shared adventure"} 
            containerClass="mt-5 !text-black text-center"
            />

            <div className='about-subtext'>
                <p>Bắt đầu cuộc sống trong trò chơi của bạn với đồ họa MMORPG hoành tráng</p>
                <p>DukeWorld kết nối tất cả người chơi từ mọi trò chơi và nền tảng</p>
            </div>
        </div>

        <div className='w-screen h-dvh' id='clip'>
            <div className='mask-clip-path about-image'>
                <img 
                src="/img/about.webp" 
                alt="About DukeWorld" 
                className='absolute top-0 left-0 object-cover size-full'
                />
            </div>
        </div>
    </div>
  )
}

export default About
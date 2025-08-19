import React, { useRef } from 'react'
import AnimatedTitle from './AnimatedTitle'
import gsap from 'gsap';
import RoundedCorners from './RoundedCorners';
import Button from './Button';

const Story = () => {
    const frameRef = useRef(null);

    const handleMouseLeave = () => {
       const element = frameRef.current

        gsap.to(element, {
            duration: 0.3,
            rotateX: 0,
            rotateY: 0,
            ease: 'power1.inOut'
        })
    }

    const handleMouseMove = (e) => {
       const {clientX, clientY} = e
       const element = frameRef.current
       if(!element) return

       const rect = element.getBoundingClientRect()
       const x = clientX - rect.left
       const y = clientY - rect.top

       const centerX = rect.width / 2
       const centerY = rect.height / 2

       const rotateX = ((y-centerY) / centerY) * -10
       const rotateY = ((x-centerX) / centerX) * 10

       gsap.to(element, {
        duration: 0.3,
        rotateX: rotateX,
        rotateY: rotateY,
        transformPerspective: 500,
        ease: 'power1.inOut'
       })
    }
  return (
    <section id='story'
    className='w-screen bg-black min-h-dvh text-blue-50'
    >
        <div className='flex flex-col items-center py-10 pb-24 size-full'>
            <p className='text-sm uppercase font-general'>
                The multiversal of Duke World
            </p>
            <div className='relative size-full'>
                <AnimatedTitle 
                    title="The st<b>o</b>ry of <br/> a hidden real<b>m</b>"
                    sectionId="#story"
                    containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
                />

                <div className='story-img-container'>
                    <div className='story-img-mask'>
                        <div className='story-img-content'>
                            <img src="/img/entrance.webp" alt="entrance"
                            ref={frameRef}
                            onMouseLeave={handleMouseLeave}
                            onMouseUp={handleMouseLeave}
                            onMouseEnter={handleMouseLeave}
                            onMouseMove={handleMouseMove}
                            className='object-contain'
                            />
                        </div>
                    </div>

                    <RoundedCorners />
                </div>
            </div>

            <div className='flex justify-center w-full -mt-80 md:-mt-64 md:me-44 md:justify-end'>
                <div className='flex flex-col items-center h-full w-fit md:items-start'>
                    <p className='max-w-sm mt-3 text-center font-circular-web text-violet-50 md:text-start'>
                        Nơi các cõi hội tụ. Khám phá bí ẩn của nó và đình hình số phận của bạn trong thế giới này.
                    </p>

                    <Button
                        id='realm-button'
                        title='Khám Phá'
                        containerClass="mt-5"
                    >

                    </Button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Story
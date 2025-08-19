import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'
import { TiLocationArrow } from 'react-icons/ti'
import { useWindowScroll } from 'react-use'
import gsap from 'gsap'

const navItems = [
    { title: 'Quan hệ', href: '#nexus' },
    { title: 'Kho báu', href: '#vault' },
    { title: 'Lời mở đầu', href: '#prologue' },
    { title: 'Giới thiệu', href: '#about' },
    { title: 'Liên hệ', href: '#contact' }
]

const Navbar = () => {
    const navContainerRef = useRef(null)
    const audioElementRef = useRef(null)
    const [isAudioPlay, setIsAudioPlay] = useState(false)
    const [isIndicatorActive, setIsIndicatorActive] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [isNavVisible, setIsNavVisible] = useState(true)
    const {y: currentScrollY} = useWindowScroll()

    const toggleAudioIndicator = () => {
        setIsAudioPlay(prev => !prev)
        setIsIndicatorActive(prev => !prev)
    }

    useEffect(() => {
        if(currentScrollY === 0){
            setIsNavVisible(true)
            navContainerRef.current.classList.remove('floating-nav')
        }else if(currentScrollY > lastScrollY){
            setIsNavVisible(false)
            navContainerRef.current.classList.add('floating-nav')
        }else if(currentScrollY < lastScrollY){
            setIsNavVisible(true)
            navContainerRef.current.classList.add('floating-nav')
        }
        setLastScrollY(currentScrollY)
    }, [currentScrollY, lastScrollY])

    useEffect(() => {
        gsap.to(navContainerRef.current, {
            y: isNavVisible ? 0 : -100,
            opacity: isNavVisible ? 1 : 0,
            duration: 0.2,
        })
    },[isNavVisible])

    useEffect(()=>{
        if(isAudioPlay){
            audioElementRef.current.play()
        }else{
            audioElementRef.current.pause()
        }
    },[isAudioPlay])
  return (
    <div ref={navContainerRef} className='fixed z-50 h-16 transition-all duration-700 border-none inset-x-6 top-4 sm:inset-x-6'>
        <header className='absolute w-full -translate-y-1/2 top-1/2'>
            <nav className='flex items-center justify-between p-4 size-full'>
                <div className='flex items-center gap-7'>
                    <img src="/img/logo.png" alt="Logo" className='w-10' />

                    <Button
                        id='product-button'
                        title='Sản phẩm'
                        rightIcon={<TiLocationArrow />}
                        containerClass="bg-blue-50 md:flex font-bold hidden justify-center items-center gap-2"
                    />
                </div>

                <div className='flex items-center h-full'>
                    <div className='hidden md:block'>
                        {navItems.map((item, index) => (
                            <a key={index}
                            href={item.href}
                            className='nav-hover-btn'
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>

                    <button onClick={toggleAudioIndicator} className='ml-10 flex items-center space-x-0.5' >
                        <audio 
                        className='hidden'
                        ref={audioElementRef} 
                        src="/audio/loop.mp3"
                        loop/>
                            {[1,2,3,4].map((bar)=>(
                                <div 
                                key={bar}
                                className={`indicator-line ${isIndicatorActive ? 'active' : ''}`}
                                style={{animationDelay: `${bar*0.1}s`}}
                                >
                                    
                                </div>
                            ))}
                    </button>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Navbar
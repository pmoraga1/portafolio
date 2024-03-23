import Link from 'next/link'

import {Button} from "./ui/button"
import {Download, Send} from "lucide-react"

import{
RiBriefcase4Fill,
RiTeamFill,
RiTodoFill,
RiArrowDownSLine,

} from 'react-icons/ri'

import DevImg from './DevImg'
import Badge from './Badge'
import Socials from './Socials'

const Hero = () => {
  return (
    <section className='py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom dark:bg-none'>
        <div className="container mx-auto">
            <div className='flex justify-between gap-x-8'>
                <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
                    <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>Web Developer</div>
                    <h1 className='h1 mb-4'> Hola, mi nombre es Paulina Moraga</h1>
                    <p className='subtitle max-w-[490px] mx-auto xl:mx-0'>Breve descripción de mi </p>
                    <div className='flex flex-col gap-3 md:flex-row gap-x-m mx-auto xl:mx-0 mb-12'>
                    <Link href='/contacto'>
                    <Button className='gap-x-2'>Contáctame<Send size={18}/></Button>
                    </Link>
                    <Button variant= 'secondary' className='gap-x-2'>Descargar CV<Download size={18}/></Button>
                    </div>
                    <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0' iconsStyles='text-foreground text-[22px]
                    hover:text-primary transition-all'/>
                </div>
                <div className='hidden md:flex relative'>
                    <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'></div>
                    <DevImg containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom' imgSrc='/hero/developer.png' />                </div>
            </div>
            <div className='hidden md:flex absolute left-1/2 bottom-44 xl:bottom-12 transform -translate-x-1/2 animate-bounce' >
                <RiArrowDownSLine className='text-3xl text-primary'/>
            </div>
        </div>
    </section>
  )
}

export default Hero
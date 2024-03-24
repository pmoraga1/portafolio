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
                    <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>DESARROLLADORA WEB FULL STACK</div>
                    <h1 className='h1 mb-4'> Hola, mi nombre es Paulina Moraga</h1>
                    <p className='subtitle max-w-[490px] mx-auto xl:mx-0'> ¡Y estoy comenzando en el mundo del Desarrollo Web Full Stack! De profesión Ingeniera Civil Industrial con más de 8 años de experiencia en el mundo de la tecnología y energía, decidí el año 2023 aventurarme en un Bootcamp de Desarrollo Web Full Stack. </p>
                    <div className='flex flex-col gap-3 md:flex-row gap-x-m mx-auto xl:mx-0 mb-12'>
                    <Link href='mailto:paulimoraga@gmail.com'>
                    <Button className='gap-x-2'>Contáctame<Send size={18}/></Button>
                    </Link>
                   
                    </div>
                    <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0' iconsStyles='text-foreground text-[22px]
                    hover:text-primary transition-all'/>
                </div>
                <div className='hidden md:flex relative'>
                    <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'></div>
                                  </div>
            </div>
            <div className='hidden md:flex absolute left-1/2 bottom-44 xl:bottom-12 transform -translate-x-1/2 animate-bounce' >
                <RiArrowDownSLine className='text-3xl text-primary'/>
            </div>
        </div>
    </section>
 
 )
}

export default Hero
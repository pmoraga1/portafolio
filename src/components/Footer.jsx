import Socials from "./Socials"

export const Footer = () => {
  return (
    <footer className='bg-secondary py-12'>
      <div className="container mx-auto">
        <div className='flex flex-col items-center justify-between'> 
          <Socials containerStyles='flex gap-x-6 ,x-auto xl:mx-0 mb-4' iconsStyles='text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all'/>
          <div className='text-muted-foreground'>
           Fuente diseño de Portafolio Web: Cristian Mihai
          </div>
        </div>
      
      </div>
      </footer>
  )
}

export default Footer

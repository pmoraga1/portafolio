import Link from 'next/link'
import Image from 'next/image'
import { Card, CardHeader } from "./ui/card"
import { Link2Icon } from 'lucide-react'
import { Badge } from './ui/badge'

export const ProjectCard = ({ project }) => {
  return (
    <Card className='group overflow-hidden relative max-w-md mx-auto my-4'> {/* Aquí se aplica un ancho máximo y márgenes automáticos a los lados */}
      <CardHeader className='p-0'>
        <div className='relative h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden'>
          <div className="absolute inset-0 flex items-center justify-center"> {/* Contenedor para centrar verticalmente */}
            <Image className='shadow-2xl' src={project.image} width={247} height={250} alt='' priority />
          </div>
          <div className='flex gap-x-4'>
            <Link href={project.link} className='bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200'>
              <Link2Icon className='text-while' />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div>
        <Badge className='uppercase text-sm font-medium mb-2 absolute top-4 left-5'>{project.category}</Badge>
        <h4 className='h4 mb-1'>{project.name}</h4>
        <p className='text-muted-foreground text-lg'>{project.description}</p>
      </div>
    </Card>
  )
}

export default ProjectCard
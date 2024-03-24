'use client'
import React, {useState} from 'react'
import {Tabs, TabsList, TabsContent, TabsTrigger} from '@/components/ui/tabs'
import ProjectCard from '@/components/ProjectCard'

const projectData = [
  {
    image:'/work/1.png',
    category:'Full Stack',
    name: 'Clan',
    description:
    'Proyecto Grupal N°5 - Bootcamp Desarrollo Web Fullstack UDD',
    link: 'https://devclanproject.netlify.app/',
    github: 'https://github.com/pmoraga1/Clan_back_end'
  },
  {
    image:'/work/2.png',
    category:'react js',
    name: 'La Ratita Gamer',
    description:
    'Proyecto Grupal N°4 - Bootcamp Desarrollo Web Fullstack UDD',
    link: 'https://deft-blancmange-4eccce.netlify.app/?classId=827063fa-2df9-40d8-982a-498b7e97e388&assignmentId=9e63e063-9a61-43c7-b9e1-c8f592f53550&submissionId=3437425a-9e4b-ef3a-09e9-bef12124fd9c',
    github: 'https://github.com/pmoraga1/Proyecto4DWFS?classId=827063fa-2df9-40d8-982a-498b7e97e388&assignmentId=9e63e063-9a61-43c7-b9e1-c8f592f53550&submissionId=3437425a-9e4b-ef3a-09e9-bef12124fd9c'
  },
  {
    image:'/work/3.png',
    category:'API',
    name: 'Dashboard Peliculas',
    description:
    'Proyecto 3 - Bootcamp Desarrollo Web Fullstack UDD',
    link: 'https://pmoraga1.github.io/proyecto-3/?classId=827063fa-2df9-40d8-982a-498b7e97e388&assignmentId=eb6d76e5-108d-4b27-98ae-1727b2cd7ce1&submissionId=94b10945-97b9-a77d-668c-cc837f4eaf00',
    github: 'https://github.com/pmoraga1/proyecto-3'
  },
  {
    image:'/work/4.png',
    category:'HTML y CSS',
    name: 'CRUD Registro Sensores de Monitoreo - Wenu Work ',
    description:
    'Proyecto 2: CRUD - Bootcamp Desarrollo Web Full Stack UDD',
    link: '/',
    github: 'https://github.com/pmoraga1/proyecto-2'
  },
  {
    image:'/work/5.png',
    category:'HTML y CSS',
    name: 'Identidad Nativa',
    description:
    'Proyecto 1: Home Sitio Web - Bootcamp Desarrollo Web Full Stack UDD',
    link: 'https://cosmic-griffin-fb3e90.netlify.app/',
    github: '/'
  }
]

const uniqueCategories= ['todos los proyectos',...new Set(projectData.map(item=> item.category))]


export const Proyectos = () => {
  const [categories, setCategories] = useState(uniqueCategories)
  const [category, setCategory] = useState('todos los proyectos')

  const filteredProjects = projectData.filter(project => {
    return category === 'todos los proyectos' ? project : project.category === category

  })
  return (
    <section className='min-h-screen pt-12'>
      <div className='containe mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>Mis proyectos</h2>
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
            {categories.map((category, index) => {
              return (
              <TabsTrigger onClick={() => {
                setCategory(category)
              }}
                value={category} key={index} className='capitalize w-[162px] md:w-auto'>{category}
                </TabsTrigger>)
            })}
          </TabsList>
    
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3' >
            {filteredProjects.map((project, index)=>{
            return (<TabsContent value={category} key={index}>
              <ProjectCard project={project} />
            </TabsContent>)
          }
          )}</div>
        </Tabs>
      </div>
    </section>
  )
}

export default Proyectos
'use client'
import React, {useState} from 'react'
import {Tabs, TabsList, TabsContent, TabsTrigger} from '@/components/ui/tabs'
import ProjectCard from '@/components/ProjectCard'

const projectData = [
  {
    image:'/work/3.png',
    category:'react js',
    name: 'Ejemplo1',
    description:
    'Proyecto 1 Bootcamp UDD',
    link: '/',
    github: '/'
  },
  {
    image:'/work/3.png',
    category:'react js',
    name: 'Ejemplo2',
    description:
    'Proyecto 1 Bootcamp UDD',
    link: '/',
    github: '/'
  },
  {
    image:'/work/3.png',
    category:'react js',
    name: 'Ejemplo4',
    description:
    'Proyecto 1 Bootcamp UDD',
    link: '/',
    github: '/'
  },
  {
    image:'/work/3.png',
    category:'react js',
    name: 'Ejemplo3',
    description:
    'Proyecto 1 Bootcamp UDD',
    link: '/',
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
        <h2 className='section-title mb-8 xl_mb-16 text-center mx-auto'>Mis proyectos</h2>
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
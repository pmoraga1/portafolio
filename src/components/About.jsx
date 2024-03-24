import DevImg from "./DevImg"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase } from 'lucide-react'

const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Paulina Moraga'
    },
    {
        icon: <PhoneCall size={20} />,
        text: '+569 8439 9357'
    },
    {
        icon: <MailIcon size={20} />,
        text: 'paulimoraga@gmail.com'
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'Ing. Civil Industrial'
    },
    {
        icon: <HomeIcon size={20} />,
        text: 'Santiago, Chile'
    }

]

const qualificationData = [
    {
        title: 'educación',
        data: [

            {
                university: 'Universidad del Desarrollo',
                qualification: 'Bootcamp Desarrollo Web Full Stack',
                years: '2023-2024'
            },
            {
                university: 'EADA Business School',
                qualification: 'Master en Dirección de Empresas Digitales',
                years: '2021-2022'
            },
            {
                university: 'Pontificia Universidad Católica',
                qualification: 'Ingeniería Civil Industrial, mención Ambiental',
                years: '2010-2016'
            }

        ]
    },
    {
        title: 'experiencia laboral',
        data: [
            {
                company: 'Wenu Work',
                role: 'COO',
                years: '2016 - actualidad'
            }
        ]
    }
]

const skillData = [
    {
        title: 'habilidades',
        data: [
            {
                name: 'HTMl, CSS'
            },
            {
                name: 'Javascript'
            },
            {
                name: 'React.js'
            },
            {
                name: 'Vite'
            },
            {
                name: 'Express'
            },
            {
                name: 'MongoDB, Firebase'
            },
            {
                name: 'Next.js'
            },
            {
                name: 'Github, Visual Studio Code'
            }

        ]
    },
    {
        title: 'herramientas',
        data: [
            {
                imgPath: '/about/vscode.svg'
            },
            {
                imgPath: '/about/vscode.svg'
            },
            {
                imgPath: '/about/vscode.svg'
            },
            {
                imgPath: '/about/vscode.svg'
            }

        ]
    },


]

export const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title)
    }
    return (
        <section className='xl:h-[860px] pb-12 xl:py-24'>
            <div className="container mx-auto">
                <h2 className='section-title mb-8 xl:mb16 text-center mx-auto'>Sobre mí</h2>
                <div className='flex flex-col xl:flex-row'>
                    <div className='flex-1 flex items-center justify-center'>
                        <Tabs defaultValue='personal'>

                            <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Información</TabsTrigger>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='qualifications'>Experiencias</TabsTrigger>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='herramientas'>Herramientas</TabsTrigger>
                            </TabsList>
                            <div className='text-lg mt-12 xl:mt-8'>
                                <TabsContent value='personal'>
                                    <div className='text-center xl:text-left'>
                                        <h3 className='h3 mb-4'>
                                          Información Personal
                                        </h3>
                                        <p className='subtitle max-w-xl max-auto xl:mx-0'> </p>
                                        <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                                            {infoData.map((item, index) => {
                                                return <div className="flex items-center gap-x-4 mx-auto xl:mx-0"
                                                    key={index}>
                                                    <div>{item.icon}</div>
                                                    <div>{item.text}</div>


                                                </div>
                                            })}
                                        </div>
                                        <div className='flex flex-col gap-y-2'>
                                            <div className='text-primary'>Idiomas</div>
                                            <div className='border-b border-border'></div>
                                            <div>Español Nativo, Inglés Intermedio</div>
                                        </div>
                                    </div>
                                </TabsContent>

                                <TabsContent value='qualifications'>
                                    <div>
                                        <h3 className='h3 mb-y text-center xl:text-left'></h3>
                                        <div className='grid md:grid-cols-2 gap-y-8'>
                                            <div className='flex flex-col gap-y-6'>
                                                <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                                    <Briefcase />
                                                    <h4 className='capitalize font-medium'>
                                                        {getData(qualificationData, 'experiencia laboral').title}
                                                    </h4>
                                                </div>
                                                <div className='flex flex-col gap-y-8'>
                                                    {getData(qualificationData, 'experiencia laboral').data.map((item, index)=>{
                                                        const {company, role, years}=item
                                                    return(
                                                    <div className='flex gap-x-8 group ' key={index}>
                                                        <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                            <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -lef-[5px] group-hover:traslate-y-[84px] transition-all duration-500'></div>
                                                        </div>
                                                        <div>
                                                            <div className='font-semibold text-xl leading-none mb-2'>{company}</div>
                                                            <div className='text-lg leading-nine text-muted-foreground mb-4'>{role}</div>
                                                            <div>{years}</div>
                                                        </div>
                                                    </div>
                                                    )
                                                    })}
                                                </div>
                                            </div>
                                            <div className='flex flex-col gap-y-6'>
                                                <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                                    <GraduationCap size={28} />
                                                    <h4 className='capitalize font-medium'>
                                                        {getData(qualificationData, 'educación').title}
                                                    </h4>
                                                </div>
                                                <div className='flex flex-col gap-y-8'>
                                                    {getData(qualificationData, 'educación').data.map((item, index)=>{
                                                        const {university, qualification, years}=item
                                                    return(
                                                    <div className='flex gap-x-8 group ' key={index}>
                                                        <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                            <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -lef-[5px] group-hover:traslate-y-[84px] transition-all duration-500'></div>
                                                        </div>
                                                        <div>
                                                            <div className='font-semibold text-xl leading-none mb-2'>{university}</div>
                                                            <div className='text-lg leading-nine text-muted-foreground mb-4'>{qualification}</div>
                                                            <div>{years}</div>
                                                        </div>
                                                    </div>
                                                    )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </TabsContent>

                                <TabsContent value='herramientas'>
                                    <div className='text-center xl:text-left'>
                                        <h3 className='hm mb-8'>
                                          
                                        </h3>
                                        <div>
                                            <h4 className='text-xl font-semibold mb-2'>Habilidades y herramientas</h4>
                                            <div className='border-b border-border mb-4'></div>
                                            <div>
                                                {getData(skillData, 'habilidades').data.map((item,index)=>{
                                                    const {name} = item
                                                    return (
                                                    <div className='w-2/4 text-center xl:text-left mx-auto xl:mx-0' key={index}>
                                                        <div className='font-medium'>{name}</div>
                                                    </div>)
                                                })}
                                            </div>
                                        </div>

                                    </div>
                                </TabsContent>

                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About

'use client'
import {RiLinkedinFill, RiGithubFill, RiFacebookFill} from 'react-icons/ri'

import Link from 'next/link'

const icons = [
{

  path: 'https://www.linkedin.com/in/paulina-moraga-947162113/',
  name: <RiLinkedinFill/>
},
{
  path: 'https://github.com/pmoraga1/',
  name: <RiGithubFill/>
}


]

const Socials = ({containerStyles, iconsStyles}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index)=>{
        return <Link href={icon.path} key={index}>
        <div className={`${iconsStyles}`}>{icon.name} 
        </div>
        </Link>
      })}

    </div>
  )
}

export default Socials

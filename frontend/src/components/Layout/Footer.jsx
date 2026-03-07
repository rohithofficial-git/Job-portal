import React, { useContext } from 'react'
import {Context} from "../../main"
import {Link} from "react-router-dom"
import { FaGithub , FaLinkedin} from "react-icons/fa"
import { SiLeetcode } from "react-icons/si";
import { RiInstagramFill} from "react-icons/ri"
function Footer() {
  const {isAuthorized}  = useContext(Context)
  return (
    <footer className= {isAuthorized ? "footerShow" : "footerHide"}>
<div>&copy; All Rights Reserved by Rohith.</div>
<div>
  <Link to={'https://github.com/rohithofficial-git/Job-portal.git'} target='github'><FaGithub></FaGithub></Link>
  <Link to={'https://www.linkedin.com/in/rohith-m-2k5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} target='linkedin'><FaLinkedin></FaLinkedin ></Link>
  <Link to={'https://www.instagram.com/rohidz._?igsh=MTNweHI0bDV0b29xZA=='} target='instagram'><RiInstagramFill></RiInstagramFill></Link>
</div>
      
    </footer>
  )
}

export default Footer
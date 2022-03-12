import { BsLinkedin, BsGithub}  from "react-icons/bs";
import yanquiel from '../assets/yanquiel.pdf';

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
          <a href="https://github.com/yanquielarango" target="_blank"> <BsGithub/></a>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/yanquiel-arango-gomez-6b62611b9/" target="_blank"><BsLinkedin/></a>
        </div>
        <div>
          <a href={yanquiel} download='/assets/Yanquiel.pdf' >CV</a>
        </div>
        
    </div>
  )
}

export default SocialMedia
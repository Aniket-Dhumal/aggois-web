import { Image } from 'react-bootstrap';
import { teamsData } from '../../data/team';
import { FaLinkedinIn } from "react-icons/fa";
import './TeamPage.css'

const TeamPage = () => {
  const handleLinkedInClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="container-fluid" id='TeamPage'>
      <div className="team-heading">
        Team
      </div>
      <div className='Teams'>
        {teamsData.map((member) => (
          <div className="team-member" key={member.id}>
            <div 
              className="team-img-container"
              onClick={() => handleLinkedInClick(member.linkedIn)}
            >
              <div className="team-img-div">
                <Image src={member.img} fluid roundedCircle />
              </div>
              <div className="linkedin-overlay">
                <div className="linkedin-icon">
                  <FaLinkedinIn size={32} />
                </div>
              </div>
            </div>
            <div className="team-name">
              {member.name}
            </div>
            <div className="team-profession">
              {member.profession}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
import { youtubeSrc } from '../../data/youtube';
import './AboutUsContent.css';

const AboutUsContent = () => {
  // Function to convert watch URLs to embed URLs
 const convertToEmbedUrl = (url: string) => {
  if (url.includes('embed')) return url;
  if (url.includes('shorts')) {
    const videoId = url.split('/shorts/')[1];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  if (url.includes('watch?v=')) {
    const videoId = url.split('v=')[1].split('&')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  return url;
};
  return (
    <div className="container-fluid" id='AboutUsContent'>
      <div className='aboutusContent-title'>OUR WORK</div>
      
      <div className="video-grid-container">
        {youtubeSrc.map((video) => (
          <div className="video-card" key={video.srcId}>
            <div className="video-container">
              <iframe 
                src={convertToEmbedUrl(video.src)} 
                title={`Video ${video.srcId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className='aboutus-iframe'
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsContent;
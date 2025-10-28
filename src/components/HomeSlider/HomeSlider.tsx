// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import { useNavigate } from 'react-router-dom';
// // import Image from 'next/image';
// import 'swiper/css';
// import 'swiper/css/autoplay';s
// import './HomeSlider.css';

// interface Slide {
//   id: number;
//   heading: string;
//   desc: string;
//   name: string;
// }

// const HomeSlider: React.FC = () => {
//   const navigate = useNavigate();

//   const handleShowMore = () => {
//     navigate('/about-us');
//   };

//   // Sample data for slides
//   const slides: Slide[] = [
//     {
//       id: 1,
//       heading: "Hello Admin!",
//       desc: "Nice project you guys have here, I'm a youtuber, let's take this project to its peak",
//       name: "Sinata"
//     },
//     {
//       id: 2,
//       heading: "Welcome Back!",
//       desc: "We've made some great progress since your last visit, check out the new features",
//       name: "Team"
//     },
//     {
//       id: 3,
//       heading: "New Updates!",
//       desc: "Latest version includes performance improvements and bug fixes",
//       name: "Developers"
//     },
//     {
//       id: 4,
//       heading: "Feedback Needed",
//       desc: "We'd love to hear your thoughts on the new dashboard design",
//       name: "Design Team"
//     },
//     {
//       id: 5,
//       heading: "Congratulations!",
//       desc: "Your project has reached 10,000 active users this month",
//       name: "Marketing"
//     }
//   ];

//   return (
//     <div className="container-fluid" id='homeSlider'>
//       <div className="swiper-container">
//         <Swiper
//           modules={[Navigation]}
//           spaceBetween={50}
//           slidesPerView={1}
//           navigation={{
//             nextEl: '.home-slider-next',
//             prevEl: '.home-slider-prev',
//           }}
//           centeredSlides={true}
//         >
//           {slides.map((slide) => (
//             <SwiperSlide key={slide.id}>
//               <div className='homeslide'>
//                 <div className='homeSlide-heading'>
//                   {slide.heading.split(' ')[0]} <span>{slide.heading.split(' ').slice(1).join(' ')}</span>
//                 </div>
//                 <div className="homeSlider-desc">
//                   {slide.desc}
//                 </div>
//                 <div className='homeSlider-name'>
//                   {slide.name}
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
          
//           {/* Custom navigation buttons */}
//           <div className="home-slider-navigation">
//             <div className="home-slider-prev"></div>
//             <div className="home-slider-next"></div>
//           </div>
//         </Swiper>
//       </div>
      
//       <div className='MainWallet'>
//         <div className='try-mainwallet'>
//           <button className='try-mainwallet-btn' onClick={handleShowMore}>SHOW MORE</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeSlider;
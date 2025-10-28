import Homebg from '../components/HomeBg/Homebg';
import ProductCard from '../components/ProductCard/ProductCard';
// import HomeSlider from '../components/HomeSlider/HomeSlider';
import ContactUsForm from '../components/contactUsForm/ContactUsForm';
import WhatIsAggois from '../components/WhatIsAggois/WhatIsAggois';

const HomePage = () => {
  return (
    <>
      <Homebg />
      <WhatIsAggois/>
      <ProductCard limit={3} />
      <ContactUsForm />
    </>
  );
};

export default HomePage;
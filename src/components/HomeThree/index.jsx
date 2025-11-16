import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import FooterHomeOne from './FooterHomeOne.jsx';
import ZeroHomeThree from './ZeroHomeThree.jsx';
import ServicesHomeThree from './ServicesHomeThree.jsx';
import AboutHomeThree from './AboutHomeThree.jsx';
import ClientHomeOne from './ClientHomeOne.jsx';
import HomeThreeHeader from './HomeTwoHeader.jsx';
import VideoHomeTwo from './Video.jsx';
import OfferSectionTwo from './Offer.jsx';
import ChooseUs from './ChooseUsHomeThree.jsx';
import CallToActionHomeTwo from './CallToActionHomeTwo.jsx';
import ContactSectionTwo from './Contact.jsx';

function HomeThree() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            
            <HomeThreeHeader action={drawerAction.toggle} />
            <ZeroHomeThree />
            <ClientHomeOne />
            <ServicesHomeThree />
            <AboutHomeThree />
            <VideoHomeTwo />
            <OfferSectionTwo />
            <ChooseUs />
            <CallToActionHomeTwo />
            <ContactSectionTwo />
            <FooterHomeOne />
            
            <BackToTop />
        </>
    );
}

export default HomeThree;

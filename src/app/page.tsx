import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import BeforeAfter from '@/components/BeforeAfter';
import Testimonials from '@/components/Testimonials';
import MeetTheTeam from '@/components/MeetTheTeam';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import BookingCTA from '@/components/BookingCTA';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyChooseUs />
        <BeforeAfter />
        <Testimonials />
        <MeetTheTeam />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <BookingCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

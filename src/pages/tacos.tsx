import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Head from "next/head";
import Link from "next/link";

const TacosPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
    
    // Add confetti effect on load
    const confettiScript = document.createElement('script');
    confettiScript.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js';
    confettiScript.async = true;
    confettiScript.onload = () => {
      window.confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D74A27', '#F1C232', '#3A73B8']
      });
    };
    document.body.appendChild(confettiScript);
    
    return () => {
      document.body.removeChild(confettiScript);
    };
  }, []);

  return (
    <Container className={isLoaded ? 'loaded' : ''}>
      <Head>
        <title>Sally B&apos;s Tacos | Authentic Mexican Street Food</title>
        <meta name="description" content="Delicious, authentic Mexican street tacos made with love by Sally B. Visit our food truck or order online for pickup and delivery." />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@400;700&family=Permanent+Marker&display=swap" rel="stylesheet" />
      </Head>

      <BackgroundTexture />
      <FloatingTacos />

      <Content>
        <Header>
          <MainTitle>Sally B&apos;s Tacos</MainTitle>
          <Tagline>Authentic Mexican Street Food</Tagline>
        </Header>

        <HeroSection>
          <HeroImage src="/images/tacos-hero.jpg" alt="Delicious tacos from Sally B's" />
          <HeroContent>
            <h2>Fresh. Flavorful. Fantastic.</h2>
            <p>
              Experience the authentic taste of Mexico right here in Detroit. Our recipes have been 
              passed down through generations, bringing you the most delicious street tacos you&apos;ve ever tasted.
            </p>
            <ButtonGroup>
              <PrimaryButton href="/menu">View Menu</PrimaryButton>
              <OrderButton href="/order">Order Online</OrderButton>
            </ButtonGroup>
          </HeroContent>
        </HeroSection>

        <FeaturesSection>
          <FeatureCard className="feature-card">
            <FeatureIcon>🔥</FeatureIcon>
            <h3>Daily Specials</h3>
            <p>Try our rotating daily specials featuring seasonal ingredients and unique flavor combinations.</p>
          </FeatureCard>
          <FeatureCard className="feature-card">
            <FeatureIcon>🚚</FeatureIcon>
            <h3>Food Truck Locations</h3>
            <p>Find our food truck at various locations throughout the city. Check our schedule to see where we&apos;ll be next!</p>
          </FeatureCard>
          <FeatureCard className="feature-card">
            <FeatureIcon>🌮</FeatureIcon>
            <h3>Catering Available</h3>
            <p>Make your next event unforgettable with Sally B&apos;s catering. Perfect for parties, corporate events, and weddings.</p>
          </FeatureCard>
        </FeaturesSection>

        <TestimonialsSection>
          <SectionTitle>What Our Customers Say</SectionTitle>
          <TestimonialGrid>
            <Testimonial className="testimonial">
              <p>&quot;The best tacos I&apos;ve had outside of Mexico. Sally B&apos;s is a must-try!&quot;</p>
              <cite>- Maria G.</cite>
            </Testimonial>
            <Testimonial className="testimonial">
              <p>&quot;I&apos;m addicted to their al pastor tacos. The flavors are incredible!&quot;</p>
              <cite>- James T.</cite>
            </Testimonial>
            <Testimonial className="testimonial">
              <p>&quot;Sally catered our wedding and our guests are still talking about the food!&quot;</p>
              <cite>- Samantha K.</cite>
            </Testimonial>
          </TestimonialGrid>
        </TestimonialsSection>

        <ContactSection>
          <SectionTitle>Visit Us Today</SectionTitle>
          <p>Check our food truck schedule or visit our permanent location in Eastern Market.</p>
          <ContactInfo>
            <div>
              <h3>Hours</h3>
              <p>Tuesday - Sunday: 11am - 8pm</p>
              <p>Closed Mondays</p>
            </div>
            <div>
              <h3>Contact</h3>
              <p>Phone: (313) 555-TACO</p>
              <p>Email: info@sallybstacos.com</p>
            </div>
          </ContactInfo>
        </ContactSection>
      </Content>

      <Footer>
        <p>&copy; {new Date().getFullYear()} Sally B&apos;s Tacos. All rights reserved.</p>
        <SocialLinks>
          <SocialLink href="https://instagram.com/sallybstacos">
            <SocialIcon className="fab fa-instagram" />
            <span>Instagram</span>
          </SocialLink>
          <SocialLink href="https://facebook.com/sallybstacos">
            <SocialIcon className="fab fa-facebook" />
            <span>Facebook</span>
          </SocialLink>
          <SocialLink href="https://twitter.com/sallybstacos">
            <SocialIcon className="fab fa-twitter" />
            <span>Twitter</span>
          </SocialLink>
        </SocialLinks>
      </Footer>
    </Container>
  );
};

export default TacosPage;

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

// Styled components
const Container = styled.div`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: #1E1E1E;
  color: #ECECEC;
  font-family: 'Montserrat', sans-serif;
  opacity: 0;
  transition: opacity 0.5s ease-in;
  
  &.loaded {
    opacity: 1;
  }
  
  & .feature-card, & .testimonial {
    opacity: 0;
    animation: ${fadeIn} 0.6s ease-out forwards;
  }
  
  & .feature-card:nth-child(1) { animation-delay: 0.2s; }
  & .feature-card:nth-child(2) { animation-delay: 0.4s; }
  & .feature-card:nth-child(3) { animation-delay: 0.6s; }
  
  & .testimonial:nth-child(1) { animation-delay: 0.3s; }
  & .testimonial:nth-child(2) { animation-delay: 0.5s; }
  & .testimonial:nth-child(3) { animation-delay: 0.7s; }
`;

const BackgroundTexture = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/images/chalkboard-texture.jpg');
  background-size: cover;
  opacity: 0.15;
  z-index: -1;
`;

const FloatingTacos = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  pointer-events: none;
  
  &::before, &::after {
    content: '🌮';
    position: absolute;
    font-size: 3rem;
    opacity: 0.2;
    animation: ${float} 6s infinite ease-in-out;
  }
  
  &::before {
    top: 10%;
    left: 5%;
    animation-delay: 1s;
  }
  
  &::after {
    bottom: 15%;
    right: 8%;
    animation-delay: 2s;
    font-size: 4rem;
  }
`;

const Content = styled.main`
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  animation: ${fadeIn} 0.8s ease-out;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 3px;
    background: linear-gradient(90deg, transparent, #F1C232, transparent);
  }
`;

const MainTitle = styled.h1`
  font-size: 4rem;
  color: #D74A27;
  margin-bottom: 0.5rem;
  font-family: 'Bebas Neue', 'Impact', sans-serif;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-shadow: 3px 3px 0 #3A73B8, -1px -1px 0 #1E1E1E;
  transform: rotate(-2deg);
  animation: ${pulse} 3s infinite ease-in-out;
  
  @media (min-width: 768px) {
    font-size: 5rem;
  }
`;

const Tagline = styled.p`
  font-size: 1.5rem;
  color: #F1C232;
  font-family: 'Permanent Marker', cursive;
  transform: rotate(-1deg);
  
  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 4rem;
  animation: ${fadeIn} 1s ease-out;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5), 0 0 0 5px #D74A27;
  transform: rotate(1deg);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: rotate(-1deg) scale(1.02);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.7), 0 0 0 5px #F1C232;
  }
  
  @media (min-width: 768px) {
    width: 50%;
  }
`;

const HeroContent = styled.div`
  @media (min-width: 768px) {
    width: 50%;
    padding-left: 2rem;
  }
  
  h2 {
    font-size: 2.5rem;
    color: #F1C232;
    margin-bottom: 1rem;
    font-family: 'Bebas Neue', 'Impact', sans-serif;
    text-shadow: 2px 2px 0 #D74A27;
    
    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    color: #ECECEC;
    
    @media (min-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const PrimaryButton = styled(Link)`
  display: inline-block;
  background-color: #3A73B8;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 2px solid #3A73B8;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.7s;
    z-index: -1;
  }
  
  &:hover {
    background-color: transparent;
    color: #3A73B8;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(58, 115, 184, 0.4);
    
    &::before {
      left: 100%;
    }
  }
`;

const OrderButton = styled(Link)`
  display: inline-block;
  background-color: #F1C232;
  color: #D74A27;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 2px solid #F1C232;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.7s;
    z-index: -1;
  }
  
  &:hover {
    background-color: #D74A27;
    color: #F1C232;
    border-color: #D74A27;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(215, 74, 39, 0.4);
    
    &::before {
      left: 100%;
    }
  }
`;

const FeaturesSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 4rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const FeatureCard = styled.div`
  background-color: rgba(30, 30, 30, 0.7);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 1px solid #3A73B8;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
    border-color: #F1C232;
    
    ${FeatureIcon} {
      transform: scale(1.2) rotate(10deg);
    }
  }
  
  h3 {
    color: #F1C232;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-family: 'Bebas Neue', 'Impact', sans-serif;
    letter-spacing: 1px;
    
    @media (min-width: 768px) {
      font-size: 1.8rem;
    }
  }
  
  p {
    color: #ECECEC;
    line-height: 1.5;
  }
`;

const SectionTitle = styled.h2`
  color: #D74A27;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  font-family: 'Bebas Neue', 'Impact', sans-serif;
  text-align: center;
  text-shadow: 2px 2px 0 #1E1E1E;
  letter-spacing: 1px;
  position: relative;
  display: inline-block;
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, transparent, #F1C232, transparent);
    background-size: 200% 100%;
    animation: ${shimmer} 2s infinite;
  }
`;

const TestimonialsSection = styled.section`
  margin-bottom: 4rem;
  text-align: center;
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Testimonial = styled.blockquote`
  background-color: rgba(30, 30, 30, 0.7);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border-left: 4px solid #D74A27;
  text-align: left;
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
    border-left-width: 8px;
  }
  
  p {
    font-style: italic;
    margin-bottom: 1rem;
    color: #ECECEC;
    font-size: 1.1rem;
    line-height: 1.6;
  }
  
  cite {
    font-weight: bold;
    color: #F1C232;
    display: block;
    text-align: right;
  }
`;

const ContactSection = styled.section`
  text-align: center;
  margin-bottom: 4rem;
  animation: ${fadeIn} 1.2s ease-out;
  
  p {
    margin-bottom: 2rem;
    font-size: 1.1rem;
    color: #ECECEC;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
  
  div {
    background-color: rgba(30, 30, 30, 0.7);
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    border: 1px solid #3A73B8;
    transition: transform 0.3s, box-shadow 0.3s;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
      border-color: #F1C232;
    }
    
    h3 {
      color: #F1C232;
      margin-bottom: 1rem;
      font-family: 'Bebas Neue', 'Impact', sans-serif;
      letter-spacing: 1px;
    }
    
    p {
      margin-bottom: 0.5rem;
      color: #ECECEC;
    }
  }
`;

const Footer = styled.footer`
  background-color: #1E1E1E;
  color: #ECECEC;
  padding: 2rem;
  text-align: center;
  border-top: 3px solid #D74A27;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -3px;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #D74A27, #F1C232, #3A73B8, #F1C232, #D74A27);
    background-size: 200% 100%;
    animation: ${shimmer} 3s infinite linear;
  }
  
  p {
    margin-bottom: 1rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

const SocialIcon = styled.i`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;

const SocialLink = styled.a`
  color: #F1C232;
  text-decoration: none;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  
  &:hover {
    color: #D74A27;
    transform: translateY(-3px);
    text-shadow: 0 0 10px rgba(241, 194, 50, 0.5);
    
    span {
      text-decoration: underline;
    }
  }
`;

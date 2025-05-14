import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  padding: 1.5rem;
  gap: 1.5rem;
  font-family: var(--font-geist-sans);
  background: linear-gradient(to bottom, #f0fdf4, #eff6ff);

  @media (min-width: 640px) {
    padding: 2rem;
    gap: 2rem;
  }

  @media (min-width: 768px) {
    padding: 5rem;
  }
`;

const Header = styled.header`
  text-align: center;
  max-width: 56rem;
  margin: 0 auto;
`;

const MainTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #4a4433;
  margin-bottom: 0.5rem;
  font-family: var(--font-cambria);
`;

const SubTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  color: #5d5a44;
  font-family: var(--font-cambria);
`;

const Main = styled.main`
  max-width: 48rem;
  margin: 0 auto;
`;

const IntroSection = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #1f2937;
  font-family: var(--font-cambria);
  line-height: 1.625;

  @media (min-width: 640px) {
    margin-bottom: 1.5rem;
    font-size: 1.125rem;
  }
`;

const GreenText = styled.span`
  color: #166534;
  font-weight: 600;
`;

const GreenItalicText = styled.span`
  color: #166534;
  font-style: italic;
`;

const BlueText = styled.span`
  color: #1d4ed8;
  font-weight: 600;
`;

const AmberText = styled.span`
  color: #b45309;
  font-weight: 600;
`;

const PurpleText = styled.span`
  color: #7e22ce;
`;

const IndigoText = styled.span`
  color: #4f46e5;
`;

const TealText = styled.span`
  color: #0d9488;
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #4a4433;
  margin-bottom: 1.5rem;
  font-family: var(--font-cambria);
  text-align: center;
`;

const SubsectionTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  font-family: var(--font-cambria);
  border-bottom: 1px solid;
  padding-bottom: 0.5rem;
`;

const GreenSubsectionTitle = styled(SubsectionTitle)`
  color: #166534;
  border-color: #dcfce7;
`;

const IndigoSubsectionTitle = styled(SubsectionTitle)`
  color: #4338ca;
  border-color: #e0e7ff;
`;

const AmberSubsectionTitle = styled(SubsectionTitle)`
  color: #b45309;
  border-color: #fef3c7;
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-bottom: 2rem;
  color: #1f2937;
  font-family: var(--font-cambria);
  & > li {
    margin-bottom: 0.5rem;
  }
`;

const BoldText = styled.span`
  font-weight: 600;
`;

const Card = styled.div`
  background-color: #f0fdf4;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #dcfce7;
  margin-bottom: 2rem;
`;

const ClosingText = styled.p`
  margin-top: 2rem;
  font-size: 1.125rem;
  font-weight: 700;
  color: #166534;
  border-top: 2px solid #dcfce7;
  padding-top: 1rem;
  font-family: var(--font-cambria);
  text-align: center;

  @media (min-width: 640px) {
    margin-top: 2.5rem;
    font-size: 1.25rem;
    padding-top: 1.5rem;
  }
`;

const RedText = styled.span`
  color: #dc2626;
`;

const BlueWaterText = styled.span`
  color: #2563eb;
`;

const AmberGuardianText = styled.span`
  color: #b45309;
`;

const AllLifeText = styled.span`
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const Footer = styled.footer`
  text-align: center;
  font-size: 0.75rem;
  color: #374151;
  margin-top: 1rem;

  @media (min-width: 640px) {
    font-size: 0.875rem;
  }
`;

const EmailForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
  padding: 2rem;
  background: linear-gradient(135deg, #166534 0%, #14532d 100%);
  border-radius: 0.75rem;
  border: 2px solid #dcfce7;
  max-width: 32rem;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
`;

const EmailInput = styled.input`
  width: 100%;
  padding: 0.875rem 1.25rem;
  border: 2px solid #dcfce7;
  border-radius: 0.5rem;
  font-size: 1rem;
  color: #1f2937;
  background-color: white;
  font-family: var(--font-cambria);
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #86efac;
    box-shadow: 0 0 0 3px rgba(134, 239, 172, 0.3);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const SubmitButton = styled.button`
  padding: 0.875rem 2rem;
  background-color: #dcfce7;
  color: #166534;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: var(--font-cambria);
  text-transform: uppercase;
  letter-spacing: 0.05em;

  &:hover {
    background-color: white;
    transform: translateY(-1px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(220, 252, 231, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

const FormTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
  font-family: var(--font-cambria);
  text-align: center;
`;

const FormDescription = styled.p`
  font-size: 1rem;
  color: #dcfce7;
  margin-bottom: 1.5rem;
  text-align: center;
  font-family: var(--font-cambria);
  line-height: 1.5;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
  width: 100%;
`;

const EventImage = styled.img`
  width: 100%;
  max-width: 42rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
`;

const ImageCaption = styled(Paragraph)`
  text-align: center;
  margin-top: 1rem;
  font-size: 0.875rem;
  font-style: italic;
  color: #5d5a44;
`;

const FormMessage = styled.div<{ type: 'success' | 'error' }>`
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  text-align: center;
  width: 100%;
  background-color: ${props => props.type === 'success' ? '#dcfce7' : '#fee2e2'};
  color: ${props => props.type === 'success' ? '#166534' : '#dc2626'};
  border: 1px solid ${props => props.type === 'success' ? '#86efac' : '#fecaca'};
  font-family: var(--font-cambria);
`;

export default function Home() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setStatus({
        type: 'success',
        message: data.message || 'Thank you for subscribing!'
      });
      setEmail('');
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container>
      <Header>
        <MainTitle>ARTS FOR THE EARTH</MainTitle>
        <SubTitle>BURG INK PRODUCTION</SubTitle>
      </Header>

      <Main>
        <IntroSection>
          <Paragraph>
            On April 26th, 2024, we came together to celebrate our <GreenText>precious connection</GreenText> with{' '}
            <GreenItalicText>Mother Earth</GreenItalicText> through art, music, and community.
          </Paragraph>
        </IntroSection>

        <ImageContainer>
          <EventImage
            src="/arts-for-the-earth-group-painting.jpg"
            alt="Group painting created during Arts for the Earth event"
          />
          <ImageCaption>
            This collaborative painting was created during our inaugural Arts for the Earth event. 
            The artwork represents our community&apos;s shared vision for environmental stewardship and creative expression.
          </ImageCaption>
        </ImageContainer>

        <IntroSection>
          <Paragraph>
            The event was a beautiful demonstration of our community&apos;s{" "}
            <BlueText>power to come together</BlueText> in celebration, expressing gratitude, sharing creativity, and deepening our
            connection to the Earth and one another.
          </Paragraph>
          <Paragraph>
            Through <PurpleText>art</PurpleText>, <IndigoText>music</IndigoText>, and <TealText>collective energy</TealText>, we created a space that uplifted and inspired, fostering a deeper commitment to the well-being of our world.
          </Paragraph>
          <Paragraph>
            The day was filled with <AmberText>heartfelt moments</AmberText> as we experienced the joy of creation, strengthened our bonds, and supported organizations dedicated to protecting and restoring the planet.
          </Paragraph>
        </IntroSection>

        <div className="mb-12">
          <SectionTitle>Event Highlights</SectionTitle>

          <div className="mb-8">
            <GreenSubsectionTitle>Creative Expression & Art</GreenSubsectionTitle>
            <List>
              <li>
                <BoldText>Tattoo Art</BoldText> – Artists created meaningful pieces, with proceeds supporting environmental causes.
              </li>
              <li>
                <BoldText>Gallery Exhibition</BoldText> – A breathtaking collection of artwork honoring nature was displayed throughout the venue.
              </li>
              <li>
                <BoldText>Live Painting</BoldText> – Artists shared their creative process in real-time, engaging with the community.
              </li>
              <li>
                <BoldText>Community Canvas</BoldText> – Everyone contributed to a collaborative art piece that now serves as a lasting memory of our shared vision.
              </li>
            </List>
          </div>

          <div className="mb-8">
            <IndigoSubsectionTitle>Music & Entertainment</IndigoSubsectionTitle>
            <List>
              <li>
                <BoldText>Live Performances</BoldText> – The day was filled with inspiring music that brought our community together.
              </li>
              <li>
                <BoldText>Art Night Collaboration</BoldText> – The evening featured an immersive art experience that continued the celebration of creativity.
              </li>
            </List>
          </div>

          <div className="mb-8">
            <AmberSubsectionTitle>Community Impact</AmberSubsectionTitle>
            <List>
              <li>
                <BoldText>Local Vendors</BoldText> – We supported local businesses through food and craft vendors, strengthening our community ties.
              </li>
              <li>
                <BoldText>Environmental Education</BoldText> – Interactive displays and workshops helped raise awareness about environmental protection.
              </li>
              <li>
                <BoldText>Youth Engagement</BoldText> – Children participated in crafts, temporary tattoos, and environmental learning activities.
              </li>
            </List>
          </div>

          <Card>
            <SubsectionTitle className="text-center">Fundraising Success</SubsectionTitle>
            <List>
              <li>
                <BoldText>Water Protection & Conservation</BoldText> – Supported Water Protectors Network and Friends of the Rouge in their mission to protect our waterways.
              </li>
              <li>
                <BoldText>Tree Planting & Conservation</BoldText> – Contributed to Greening of Detroit&apos;s efforts to create a greener city.
              </li>
              <li>
                <BoldText>Community Support</BoldText> – Raised funds for various local organizations including Rebel Dogs Detroit, Detroit Alley Cats, and Sanctum House.
              </li>
            </List>
          </Card>
        </div>

        <ClosingText>
          Our first Arts for the Earth event was a beautiful reminder that when we <RedText>Share Love!</RedText> and protect our{' '}
          <BlueWaterText>waters</BlueWaterText> as <AmberGuardianText>Guardians of the land</AmberGuardianText>, we are
          protecting the source of <AllLifeText>All life</AllLifeText>.
        </ClosingText>
      </Main>

      <Footer>
        <p>Thank you for being part of our journey to celebrate and protect our Earth</p>
        <EmailForm onSubmit={handleSubmit}>
          <FormTitle>Stay Connected</FormTitle>
          <FormDescription>
            Join our mailing list to be notified about next year&apos;s Arts for the Earth event
          </FormDescription>
          {status.type && (
            <FormMessage type={status.type}>
              {status.message}
            </FormMessage>
          )}
          <EmailInput
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isSubmitting}
          />
          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </SubmitButton>
        </EmailForm>
      </Footer>
    </Container>
  );
}

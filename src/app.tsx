import { GlobalStyles, Stack } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { AboutUs, Background, Badge, Contact, Experience, Footer, Intro, References, Section, Values } from './components';
import { THEME } from './theme';

export const App = () => (
  <ThemeProvider theme={THEME}>
    <GlobalStyles styles={{ html: { overscrollBehavior: 'none' }, body: { margin: 0 } }} />
    <Stack>
      <Background>
        <Stack sx={{ paddingX: { xs: 2, sm: 4, lg: 20, xl: 30 }, paddingY: { xs: 6, md: 10 } }}>
          <Badge />
          <Stack sx={{ backdropFilter: 'blur(2px)', gap: 10, padding: 2 }}>
            <Intro />
            <Stack sx={{ gap: { xs: 7, md: 10 } }}>
              <Section title="Who we are">
                <AboutUs />
              </Section>
              <Section title="Experience">
                <Experience />
              </Section>
              <Section title="Core Values">
                <Values />
              </Section>
              <Section title="References">
                <References />
              </Section>
              <Section title="Get in touch" hasIcon>
                <Contact />
              </Section>
            </Stack>
            <Footer />
          </Stack>
        </Stack>
      </Background>
    </Stack>
  </ThemeProvider>
);

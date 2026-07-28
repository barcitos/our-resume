import { Stack, Typography } from '@mui/material';

const REFERENCES_DATA = [
  {
    quote:
      "I had the opportunity to closely collaborate with Barbora during our time at Deutsche Boerse, where I had the chance to bring her onto our team based on my previous working experience. Barbora's dedication to upholding the highest standards of quality and user experience significantly contributed to the project's overall success.",
    author: 'Jakub',
    role: 'Senior Software Engineer',
    company: 'Deutsche Börse',
  },
  {
    quote:
      'Patrik played a pivotal role as an architect and software engineer for our project. His expertise in frontend development, his proactive approach to problem-solving, and his outstanding communication skills make him an invaluable asset to any team or project. He proactively addressed performance issues, optimizing our application for efficiency and scalability.',
    author: 'Jakub',
    role: 'Senior Software Engineer',
    company: 'Deutsche Börse',
  },
  {
    quote:
      'It was a pleasure working with Barbora. She was always friendly, approachable, and willing to help whenever someone needed support. Her positive attitude and teamwork made collaboration easy and enjoyable. I really appreciated working with her and wish her all the best in the future.',
    author: 'Daniel',
    role: 'Senior QA Engineer',
    company: 'Qubix Studio',
  },
];

export const References = () => (
  <Stack component="section" sx={{ gap: { xs: 2, md: 3 } }}>
    {REFERENCES_DATA.map(({ author, company, role, quote }) => (
      <Stack key={quote} sx={{ background: 'rgb(67 67 67 / 0.05)', gap: 3, padding: 4 }}>
        <Typography variant="subtitle1" sx={{ color: '#d0d0d0', maxWidth: '90%' }}>
          "{quote}"
        </Typography>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          sx={{
            alignItems: { xs: 'flex-start', sm: 'center' },
            borderTop: `2px solid`,
            borderColor: quote.includes('Patrik') ? 'patrik.main' : 'barbora.main',
            gap: 2,
            justifyContent: 'space-between',
            paddingTop: 2,
          }}
        >
          <Stack sx={{ gap: 0.5 }}>
            <Typography variant="subtitle2" sx={{ color: '#fff', fontWeight: 600 }}>
              {author}
            </Typography>
            <Typography variant="caption" sx={{ color: '#a0a0a0' }}>
              {role}
            </Typography>
          </Stack>
          <Stack sx={{ background: 'rgb(67 67 67 / 0.15)', padding: '4px 12px' }}>
            <Typography variant="overline" sx={{ color: '#b0b0b0' }}>
              {company}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    ))}
  </Stack>
);

import { Box, Stack, Typography } from '@mui/material';

const PEOPLE = [
  {
    id: 'barbora',
    name: 'Barbora Šlárka',
    role: 'FRONTEND | 6+ YEARS',
    technologies: ['Typescript', 'React', 'GraphQL', 'Material UI'],
  },
  {
    id: 'patrik',
    name: 'Patrik Šlárka',
    role: 'FULL-STACK | 12+ YEARS',
    technologies: ['Typescript', 'React', 'Node.js', 'GraphQL', 'AWS'],
  },
];

export const AboutUs = () => (
  <Stack direction={{ xs: 'column', md: 'row' }} sx={{ alignItems: 'center', gap: 5, justifyContent: 'space-between' }}>
    <Stack sx={{ flex: 1, gap: 5, width: '100%' }}>
      {PEOPLE.map(({ id, name, role, technologies }) => (
        <Stack
          key={id}
          direction={{ xs: 'column', sm: 'row' }}
          sx={{ alignItems: { xs: 'center', md: 'flex-start' }, gap: 3 }}
        >
          <Stack sx={{ alignItems: 'center', gap: 1 }}>
            <Box component="img" src={`/${id}.jpeg`} alt={name} sx={{ width: 160 }} />
            <Typography variant="caption" sx={{ color: `${id}.main` }}>
              {role}
            </Typography>
          </Stack>
          <Stack sx={{ alignItems: { xs: 'center', sm: 'flex-start' }, gap: 2 }}>
            <Typography variant="h4" sx={{ color: `${id}.main`, fontWeight: 'bold', textTransform: 'capitalize' }}>
              {name}
            </Typography>
            <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1, width: '100%' }}>
              {technologies.map((badge) => (
                <Typography
                  key={badge}
                  variant="caption"
                  sx={{ backgroundColor: `#aaaaaa50`, color: 'white', padding: '4px 8px' }}
                >
                  {badge}
                </Typography>
              ))}
            </Stack>
          </Stack>
        </Stack>
      ))}
    </Stack>
    <Stack sx={{ flex: 1, gap: 3, '& .MuiTypography-root': { color: '#b0b0b0', b: { color: '#fff', fontWeight: 'bold' } } }}>
      <Typography>
        We build beautiful products with <b>focus on the user</b>, while writing <b>readable and scalable code</b>. Our aim
        is to create products that last, using solutions proven in the real world. We have experience with both{' '}
        <b>greenfield</b> and <b>well-established</b> projects.
      </Typography>
      <Typography>
        On the <b>Front end</b>, we work with <b>Typescript</b> and <b>React</b>, using <b>Material UI</b> as the core
        component library. We then customize the existing components to fit your <b>specific design needs</b>. We make sure
        the application is <b>responsive</b> and <b>accessible</b> to all users.
      </Typography>
      <Typography>
        On the <b>Back end</b>, we use <b>Typescript</b> with <b>Node.js</b>, with <b>PostgreSQL</b> for storage and{' '}
        <b>Redis</b> for caching. Our favorite libraries include <b>GraphQL Yoga</b>, <b>TypeORM</b> and <b>type-graphql</b>.
      </Typography>
      <Typography>
        To facilitate communication between the client and server, we use <b>GraphQL</b> with <b>Relay.js</b> for data
        management.
      </Typography>
      <Typography>
        We deploy our applications on <b>AWS</b>, using <b>Docker containers</b>. Our technical solutions always make sure
        the application is available at all times by <b>auto-scaling</b> and <b>load balancers</b>. We make sure the
        applications are <b>resilient to security breaches and malicious actors</b>.
      </Typography>
      <Typography>
        We cooperate in <b>teams of all sizes</b>, no matter where they are from. Given our remote collaboration, we put
        emphasis on <b>documenting everything</b>.
      </Typography>
    </Stack>
  </Stack>
);

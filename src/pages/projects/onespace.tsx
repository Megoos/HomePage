import { ExternalLinkIcon } from '@chakra-ui/icons';
import { AspectRatio, Badge, Container, Link, List, ListItem } from '@chakra-ui/react';
import { PageLayout } from '@/application/layouts/PageLayout';
import { ProjectImage, ProjectMeta, ProjectTitle } from '@/entities/project';
import { Paragraph as P } from '@/shared/ui/Paragraph';

import screenshotImg from '@/assets/images/works/onespace/screenshot.jpg';
import viewImg from '@/assets/images/works/onespace/view.jpg';

const OneSpace = () => (
  <PageLayout title="OneSpace">
    <Container mt={8}>
      <ProjectTitle>
        OneSpace <Badge>2020-2021</Badge>
      </ProjectTitle>
      <P>
        Branded video meeting rooms. Run interviews, meet with your team, clients and partners as if
        you were in the same space.
      </P>
      <List ml={4} mt={4} mb={5}>
        <ListItem>
          <ProjectMeta>Website</ProjectMeta>
          <Link href="https://onespace.co/" target="_blank" rel="noreferrer">
            https://onespace.co/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <ProjectMeta>Platform</ProjectMeta>
          <span>Desktop/Mobile web browser</span>
        </ListItem>
        <ListItem>
          <ProjectMeta>Stack</ProjectMeta>
          <span>TypeScript · ReactJS · Redux-Saga · WebRTC · WebSocket</span>
        </ListItem>
        <ListItem>
          <ProjectMeta>Blogpost</ProjectMeta>
          <Link
            href="https://medium.com/swlh/we-launched-a-startup-to-combat-zoom-fatigue-remotely-3edc94fc4e5c"
            target="_blank"
            rel="noreferrer"
          >
            We Launched a Startup to Combat Zoom Fatigue. Remotely. <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <ProjectImage src={screenshotImg.src} alt="OneSpace screenshot" />
      <ProjectImage src={viewImg.src} alt="OneSpace view" />
      <AspectRatio maxW="640px" ratio={1.9} my={4} borderRadius="lg" overflow="hidden">
        <video autoPlay muted loop playsInline>
          <source src="/video/onespace.mp4" type="video/mp4" />
        </video>
      </AspectRatio>
    </Container>
  </PageLayout>
);

export default OneSpace;
export { getServerSideProps } from '@/application/providers/ChakraProvider';

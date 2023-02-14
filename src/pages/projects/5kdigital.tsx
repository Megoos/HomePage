import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react';
import { PageLayout } from '@/application/layouts/PageLayout';
import { ProjectImage, ProjectMeta, ProjectTitle } from '@/entities/project';
import { Paragraph as P } from '@/shared/ui/Paragraph';

import screenshotImg from '@/assets/images/works/5kdigital/screenshot.jpg';

const Digital = () => (
  <PageLayout title="5K Digital">
    <Container mt={8}>
      <ProjectTitle>
        5K Digital <Badge>2022-2023</Badge>
      </ProjectTitle>
      <P>
        The Modern Digital Book Library. Save time and money, learn and develop by reading short
        summaries of books in the Kazakh language.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <ProjectMeta>Website</ProjectMeta>
          <Link href="https://5kdigital.kz/en" target="_blank" rel="noreferrer">
            https://5kdigital.kz/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <ProjectMeta>Platform</ProjectMeta>
          <span>Desktop/Mobile web browser</span>
        </ListItem>
        <ListItem>
          <ProjectMeta>Stack</ProjectMeta>
          <span>TypeScript · ReactJS · NextJS · React-Query · MantineUI · Strapi</span>
        </ListItem>
      </List>

      <ProjectImage src={screenshotImg.src} alt="5K Digital screenshot" />
    </Container>
  </PageLayout>
);

export default Digital;
export { getServerSideProps } from '@/application/providers/ChakraProvider';

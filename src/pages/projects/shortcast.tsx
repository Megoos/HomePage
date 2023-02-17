import { ExternalLinkIcon } from '@chakra-ui/icons';
import { AspectRatio, Badge, Container, Link, List, ListItem } from '@chakra-ui/react';
import { PageLayout } from '@/application/layouts/PageLayout';
import { ProjectImage, ProjectMeta, ProjectTitle } from '@/entities/project';
import { Paragraph as P } from '@/shared/ui/Paragraph';

import screenshotImg from '@/assets/images/works/shortcast/screenshot.png';
import viewImg from '@/assets/images/works/shortcast/view.png';

const Shortcast = () => (
  <PageLayout title="Shortcast">
    <Container mt={8}>
      <ProjectTitle>
        Shortcast <Badge>2021-2022</Badge>
      </ProjectTitle>
      <P>
        Simple screen recording tool. Record short videos with explanations and share them with a
        single link. Shortcast Google Chrome extension helps you deliver everything that matters in
        just a couple of clicks.
      </P>
      <List ml={4} mt={4} mb={5}>
        <ListItem>
          <ProjectMeta>Website</ProjectMeta>
          <Link href="https://shortcast.io/" target="_blank" rel="noreferrer">
            https://shortcast.io/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <ProjectMeta>Extension</ProjectMeta>
          <Link
            href="https://chrome.google.com/webstore/detail/shortcast-%E2%80%93-free-video-no/lenkihnljpdkihbhdflmoljnmcjbbogn"
            target="_blank"
            rel="noreferrer"
          >
            Shortcast Google Chrome Extension <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <ProjectMeta>Platform</ProjectMeta>
          <span>Desktop Chrome browser</span>
        </ListItem>
        <ListItem>
          <ProjectMeta>Stack</ProjectMeta>
          <span>TypeScript · ReactJS · NextJS · Chrome API · Webpack · Strapi</span>
        </ListItem>
        <ListItem>
          <ProjectMeta>Blogpost</ProjectMeta>
          <Link
            href="https://medium.com/shortcast/shortcast-for-product-designers-e8147e1a5556"
            target="_blank"
            rel="noreferrer"
          >
            Async Communication Format for Product Designers <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <ProjectImage src={viewImg.src} alt="Shortcast view" />
      <ProjectImage src={screenshotImg.src} alt="Shortcast screenshot" />
      <AspectRatio maxW="640px" ratio={1.65} my={4} borderRadius="lg" overflow="hidden">
        <video autoPlay muted loop playsInline>
          <source src="/video/shortcast.mp4" type="video/mp4" />
        </video>
      </AspectRatio>
    </Container>
  </PageLayout>
);

export default Shortcast;
export { getServerSideProps } from '@/application/providers/ChakraProvider';

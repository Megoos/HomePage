import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react';
import { PageLayout } from '@/application/layouts/PageLayout';
import { ProjectImage, ProjectMeta, ProjectTitle } from '@/entities/project';
import { Paragraph as P } from '@/shared/ui/Paragraph';

import screenshotImg from '@/assets/images/works/takeprofit/screenshot.jpg';

const TakeProfir = () => (
  <PageLayout title="TakeProfit">
    <Container mt={8}>
      <ProjectTitle>
        TakeProfit <Badge>2021-2022</Badge>
      </ProjectTitle>
      <P>
        Volatility killer trading bots for Binance. Turn on the self-driving mode for your trading
        strategy.
      </P>
      <List ml={4} mt={4} mb={5}>
        <ListItem>
          <ProjectMeta>Website</ProjectMeta>
          <Link href="https://takeprofit.ai/" target="_blank" rel="noreferrer">
            https://takeprofit.ai/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <ProjectMeta>Platform</ProjectMeta>
          <span>Desktop/Mobile web browser</span>
        </ListItem>
        <ListItem>
          <ProjectMeta>Stack</ProjectMeta>
          <span>TypeScript · ReactJS · React-Query · Auth0 · Parcel</span>
        </ListItem>
      </List>

      <ProjectImage src={screenshotImg.src} alt="TakeProfit screenshot" />
    </Container>
  </PageLayout>
);

export default TakeProfir;
export { getServerSideProps } from '@/application/providers/ChakraProvider';

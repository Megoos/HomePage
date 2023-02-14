import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import { PageLayout } from '@/application/layouts/PageLayout';
import { ProjectGridItem } from '@/entities/project';
import { Section } from '@/shared/ui/Section';

import digitalPreview from '@/assets/images/works/5kdigital/preview.png';
import onespacePreview from '@/assets/images/works/onespace/preview.png';
import shortcastPreview from '@/assets/images/works/shortcast/preview.png';
import takeprofitPreview from '@/assets/images/works/takeprofit/preview.png';

const Projects = () => (
  <PageLayout title="Projects">
    <Container mt={8}>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <ProjectGridItem id="shortcast" title="Shortcast" thumbnail={shortcastPreview}>
            Simple screen recording tool
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem id="onespace" title="OneSpace" thumbnail={onespacePreview}>
            Branded video meeting rooms
          </ProjectGridItem>
        </Section>

        <Section delay={0.15}>
          <ProjectGridItem id="takeprofit" title="TakeProfit" thumbnail={takeprofitPreview}>
            Volatility killer trading bots
          </ProjectGridItem>
        </Section>
        <Section delay={0.15}>
          <ProjectGridItem id="5kdigital" title="5K Digital" thumbnail={digitalPreview}>
            The modern digital book library
          </ProjectGridItem>
        </Section>
      </SimpleGrid>

      {/* <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section> */}
    </Container>
  </PageLayout>
);

export default Projects;
export { getServerSideProps } from '@/application/providers/ChakraProvider';

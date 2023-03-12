import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import { PageLayout } from '@/application/layouts/PageLayout';
import { PostGridItem } from '@/entities/post';
import { Section } from '@/shared/ui/Section';

import ratioImg from '@/assets/images/posts/aspect-ratio.png';
import unionsImg from '@/assets/images/posts/discriminating-unions.png';
import ecmascriptImg from '@/assets/images/posts/ecmascript-2019.png';
import grpcImg from '@/assets/images/posts/implementation-of-grpc.png';
import hooksReduxImg from '@/assets/images/posts/react-hooks-redux.png';
import testingImg from '@/assets/images/posts/react-testing-library.png';
import genericImg from '@/assets/images/posts/typescript-generic.png';
import typingApiImg from '@/assets/images/posts/typing-api-response.png';

const Posts = () => (
  <PageLayout title="Posts">
    <Container mt={8}>
      <Heading as="h3" fontSize={20} mb={4}>
        Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <PostGridItem
            title="Typing API response — TypeScript"
            thumbnail={typingApiImg}
            href="https://medium.com/@meguskov/typing-api-response-typescript-7b88628f5e89"
          />
          <PostGridItem
            title="Implementation of gRPC in web and server with TypeScript"
            thumbnail={grpcImg}
            href="https://medium.com/front-end-weekly/implementation-of-grpc-in-web-and-server-with-typescript-165e8ca0155b"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <PostGridItem
            title="Discriminating Unions — Typescript"
            thumbnail={unionsImg}
            href="https://medium.com/@meguskov/typescript-tips-and-tricks-discriminating-unions-c7ebd9f3b881"
          />
          <PostGridItem
            title="Aspect ratio box — CSS"
            thumbnail={ratioImg}
            href="https://medium.com/@meguskov/aspect-ratio-box-css-tricks-8a8096b03d8d"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <PostGridItem
            title="Typescript Generic React Components"
            thumbnail={genericImg}
            href="https://medium.com/@meguskov/typescript-generic-react-components-e8a794c8a694"
          />
          <PostGridItem
            title="Testing with react-testing-library"
            thumbnail={testingImg}
            href="https://medium.com/@meguskov/unit-%D1%82%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-react-%D0%BF%D0%BE-%D0%BD%D0%BE%D0%B2%D0%BE%D0%BC%D1%83-af15de1982a0"
          />
          <PostGridItem
            title="React Hooks + Redux = 👍"
            thumbnail={hooksReduxImg}
            href="https://medium.com/@meguskov/react-hooks-redux-8d8babdfe198"
          />
          <PostGridItem
            title="What's New in JavaScript 2019 (ECMAScript2019/ES10)"
            thumbnail={ecmascriptImg}
            href="https://medium.com/@meguskov/%D0%BD%D0%BE%D0%B2%D0%B8%D0%BD%D0%BA%D0%B8-javascript-2019-ecmascript2019-es10-be7513a5d8dd"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </PageLayout>
);

export default Posts;
export { getServerSideProps } from '@/application/providers/ChakraProvider';

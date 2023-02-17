import NextLink from 'next/link';
import { Box, Button, Container, Divider, Heading, Text } from '@chakra-ui/react';

const Error404 = () => {
  return (
    <Container mt={8} textAlign="center">
      <Heading as="h1">Not found</Heading>
      <Text>The page you&apos;re looking for was not found.</Text>
      <Divider my={6} />
      <Box my={6} textAlign="center">
        <Button as={NextLink} href="/" colorScheme="orange" scroll={false}>
          Return to home
        </Button>
      </Box>
    </Container>
  );
};

export default Error404;

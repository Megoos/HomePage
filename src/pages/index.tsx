import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoLogoMedium } from 'react-icons/io5';
import Image from 'next/image';
import NextLink from 'next/link';
import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  chakra,
  Container,
  Heading,
  Link,
  List,
  ListItem,
  useColorModeValue,
} from '@chakra-ui/react';
import { PageLayout } from '@/application/layouts/PageLayout';
import { BioSection, BioYear } from '@/entities/bio';
import { Paragraph as P } from '@/shared/ui/Paragraph';
import { Section } from '@/shared/ui/Section';

import ProfileImg from '@/assets/images/profile.jpg';

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop),
});

function Home() {
  return (
    <PageLayout>
      <Container>
        <Box
          display={{ md: 'flex' }}
          alignItems="center"
          mt={8}
          textAlign={{ base: 'center', md: 'left' }}
        >
          <Box flexShrink={0} mt={{ base: 4, md: 0 }} mr={{ md: 6 }} textAlign="center">
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src={ProfileImg}
                alt="Profile image"
                borderRadius="full"
                width="100"
                height="100"
              />
            </Box>
          </Box>

          <Box flexGrow={1} mt={{ base: 2, md: 0 }}>
            <Heading as="h2" variant="page-title">
              Mikhail Guskov
            </Heading>
            <p>Developer / Traveler / Runner </p>
          </Box>
        </Box>

        <Box
          borderRadius="lg"
          mt={6}
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Hello, I&apos;m a full-stack developer living in Thailand now!
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About
          </Heading>
          <P>
            I have deep expertise in web technologies based on JavaScript both front-end, back-end
            and infrastructure. I like to learn new things and solve complex problems! I publish
            articles on various topics on my blog on{' '}
            <Link href="https://medium.com/@meguskov" target="_blank" rel="noreferrer">
              Medium
            </Link>
            , and I also have a telegram channel{' '}
            <Link href="https://t.me/proreact" target="_blank" rel="noreferrer">
              Pro React
            </Link>
            .
          </P>
          <Box textAlign="center" my={4}>
            <Button
              as={NextLink}
              href="/projects"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="orange"
            >
              My Projects
            </Button>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Education
          </Heading>
          <BioSection>
            <BioYear>2017</BioYear>
            Master&apos;s degree, Software Engineering — Novosibirsk State Technical University
            (NSTU).
          </BioSection>
          <BioSection>
            <BioYear>2015</BioYear>
            Bachelor&apos;s degree, Computer Science, Software Engineering — South Ural State
            University (SUSU).
          </BioSection>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Experience
          </Heading>
          <BioSection>
            <BioYear>2023 to present</BioYear>Working as a freelancer
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>Worked at Sovran — EMEA
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>Worked at VK — Moscow, Russia
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>Worked at Diginavis — Innopolis, Russia
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>Worked at Dooglys — Innopolis, Russia
          </BioSection>
          <BioSection>
            <BioYear>2016</BioYear>Worked at League of Robots — Novosibirsk, Russia
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Hobby
          </Heading>
          <P>Running, Swimming, Music</P>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Socials
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/Megoos" target="_blank" rel="noreferrer">
                <Button variant="ghost" colorScheme="orange" leftIcon={<IoLogoGithub />}>
                  @Megoos
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.linkedin.com/in/m-guskov/" target="_blank" rel="noreferrer">
                <Button variant="ghost" colorScheme="orange" leftIcon={<IoLogoLinkedin />}>
                  @m-guskov
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://instagram.com/meguskov" target="_blank" rel="noreferrer">
                <Button variant="ghost" colorScheme="orange" leftIcon={<IoLogoInstagram />}>
                  @meguskov
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://medium.com/@meguskov" target="_blank" rel="noreferrer">
                <Button variant="ghost" colorScheme="orange" leftIcon={<IoLogoMedium />}>
                  @meguskov
                </Button>
              </Link>
            </ListItem>
          </List>

          <Box textAlign="center" my={4}>
            <Button
              as={NextLink}
              href="/posts"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="orange"
            >
              Posts
            </Button>
          </Box>
        </Section>
      </Container>
    </PageLayout>
  );
}

export default Home;
export { getServerSideProps } from '@/application/providers/ChakraProvider';

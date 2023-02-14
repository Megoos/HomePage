import { forwardRef } from 'react';
import { IoLogoGithub } from 'react-icons/io5';
import NextLink from 'next/link';
import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  BoxProps,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  LinkProps,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { ThemeToggleButton } from '@/features/ThemeToggleButton';
import { Logo } from '@/shared/ui/Logo';

const LinkItem = ({ href, path, target, children, ...props }: LinkProps & { path?: string }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900');

  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? 'grassOrange' : undefined}
      color={active ? '#202023' : inactiveColor}
      target={target}
      rounded="lg"
      {...props}
    >
      {children}
    </Link>
  );
};

const MenuLink = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
  <Link ref={ref} as={NextLink} scroll={false} {...props} />
));

interface NavBarProps extends BoxProps {
  path: string;
}

export const NavBar = (props: NavBarProps) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#1E222880')}
      css={{ backdropFilter: 'blur(8px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo text="Mikhail Guskov" />
          </Heading>
        </Flex>

        <Stack
          direction="row"
          display={{ base: 'none', md: 'flex' }}
          width="auto"
          alignItems="center"
          flexGrow={1}
        >
          <LinkItem href="/" path={path}>
            About
          </LinkItem>
          <LinkItem href="/projects" path={path}>
            Projects
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
          <LinkItem
            href="https://github.com/Megoos/homepage"
            target="_blank"
            rel="noreferrer"
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Source
          </LinkItem>
        </Stack>

        <Box flex={1} textAlign="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={MenuLink} href="/">
                  About
                </MenuItem>
                <MenuItem as={MenuLink} href="/projects">
                  Projects
                </MenuItem>
                <MenuItem as={MenuLink} href="/posts">
                  Posts
                </MenuItem>
                <MenuItem
                  as={Link}
                  href="https://github.com/Megoos/homepage"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

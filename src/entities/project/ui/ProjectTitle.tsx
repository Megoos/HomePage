import NextLink from 'next/link';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Heading, Link } from '@chakra-ui/react';

interface ProjectTitleProps {
  children: React.ReactNode;
}

export const ProjectTitle = ({ children }: ProjectTitleProps) => (
  <Box>
    <Link as={NextLink} href="/projects" scroll={false}>
      Projects
    </Link>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
);

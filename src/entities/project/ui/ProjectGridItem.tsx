import Image, { StaticImageData } from 'next/image';
import NextLink from 'next/link';
import { Box, chakra, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';

interface ProjectGridItemProps {
  children?: React.ReactNode;
  id: string;
  title: string;
  thumbnail: string | StaticImageData;
}

const ProjectImage = chakra(Image, {
  shouldForwardProp: prop => ['src', 'alt', 'placeholder'].includes(prop),
});

export const ProjectGridItem = ({ children, id, title, thumbnail }: ProjectGridItemProps) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <ProjectImage src={thumbnail} alt={title} placeholder="blur" rounded="xl" />
      <LinkOverlay as={NextLink} href={`/projects/${id}`} scroll={false}>
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
);

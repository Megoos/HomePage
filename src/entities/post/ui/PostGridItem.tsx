import Image, { StaticImageData } from 'next/image';
import { Box, chakra, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';

interface PostGridItemProps {
  children?: React.ReactNode;
  href: string;
  title: string;
  thumbnail: string | StaticImageData;
}

const PostImage = chakra(Image, {
  shouldForwardProp: prop => ['src', 'alt', 'placeholder'].includes(prop),
});

export const PostGridItem = ({ children, href, title, thumbnail }: PostGridItemProps) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <PostImage src={thumbnail} alt={title} placeholder="blur" rounded="xl" />
      <LinkOverlay href={href} target="_blank" rel="noreferrer">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
);

import { Image } from '@chakra-ui/react';

interface ProjectImageProps {
  src: string;
  alt: string;
}

export const ProjectImage = ({ src, alt }: ProjectImageProps) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={6} />
);

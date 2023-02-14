import { Badge } from '@chakra-ui/react';

interface ProjectMetaProps {
  children: React.ReactNode;
}

export const ProjectMeta = ({ children }: ProjectMetaProps) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
);

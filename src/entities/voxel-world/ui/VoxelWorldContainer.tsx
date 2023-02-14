import { forwardRef } from 'react';
import { Box } from '@chakra-ui/react';

interface VoxelWorldContainerProps {
  children: React.ReactNode;
}

export const VoxelWorldContainer = forwardRef<HTMLDivElement, VoxelWorldContainerProps>(
  ({ children }, ref) => (
    <Box
      ref={ref}
      m="auto"
      w={[280, 320, 360]}
      h={[280, 320, 360]}
      position="relative"
      cursor="pointer"
    >
      {children}
    </Box>
  )
);

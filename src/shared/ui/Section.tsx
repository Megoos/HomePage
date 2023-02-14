import { Box, BoxProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion<Omit<BoxProps, 'transition'>>(Box);

interface SectionProps {
  children: React.ReactNode;
  delay?: number;
}

export const Section = ({ children, delay = 0 }: SectionProps) => (
  <MotionBox
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
    mb={6}
  >
    {children}
  </MotionBox>
);

import NextLink from 'next/link';
import { Text, useColorModeValue } from '@chakra-ui/react';

interface LogoProps {
  text: string;
}

export const Logo = ({ text }: LogoProps) => {
  return (
    <NextLink href="/" scroll={false}>
      <Text
        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
        fontSize={18}
        fontFamily="m-plus"
        fontWeight="bold"
      >
        {text}
      </Text>
    </NextLink>
  );
};

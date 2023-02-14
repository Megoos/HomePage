import { GetServerSideProps } from 'next';
import {
  ChakraProvider as Chakra,
  cookieStorageManagerSSR,
  localStorageManager,
} from '@chakra-ui/react';
import { theme } from './theme';

interface ChakraProps {
  children: React.ReactNode;
  cookies: string;
}

export const ChakraProvider = ({ children, cookies }: ChakraProps) => {
  const colorModeManager =
    typeof cookies === 'string' ? cookieStorageManagerSSR(cookies) : localStorageManager;

  return (
    <Chakra theme={theme} colorModeManager={colorModeManager}>
      {children}
    </Chakra>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {
      cookies: req.headers.cookie ?? '',
    },
  };
};

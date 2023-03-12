import { GetServerSideProps } from 'next';
import {
  ChakraProvider as Chakra,
  cookieStorageManager,
  cookieStorageManagerSSR,
} from '@chakra-ui/react';
import { theme } from './theme';

interface ChakraProps {
  children: React.ReactNode;
  cookies: string;
}

export const ChakraProvider = ({ children, cookies }: ChakraProps) => {
  const colorModeManager =
    typeof cookies === 'string' ? cookieStorageManagerSSR(cookies) : cookieStorageManager;

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

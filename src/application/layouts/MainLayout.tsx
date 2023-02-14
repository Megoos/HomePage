import dynamic from 'next/dynamic';
import Head from 'next/head';
import { Router } from 'next/router';
import { Box, Container } from '@chakra-ui/react';
import { VoxelWorldLoader } from '@/entities/voxel-world';
import { Footer } from '@/widgets/Footer';
import { NavBar } from '@/widgets/NavBar';

const LazyVoxelWorld = dynamic(
  () => import('@/entities/voxel-world').then(module => module.VoxelWorld),
  {
    ssr: false,
    loading: () => <VoxelWorldLoader />,
  }
);

interface MainLayoutProps {
  children: React.ReactNode;
  router: Router;
}

export const MainLayout = ({ children, router }: MainLayoutProps) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Mikhail Guskov - Homepage</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta property="og:site_name" content="Mikhail Guskov" />
        <meta name="og:title" content="Mikhail Guskov" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}

        <LazyVoxelWorld />

        <Footer />
      </Container>
    </Box>
  );
};

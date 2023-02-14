import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import { MainLayout } from '@/application/layouts/MainLayout';
import { ChakraProvider } from '@/application/providers/ChakraProvider';

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual';
}

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider cookies={pageProps.cookies}>
      <MainLayout router={router}>
        <AnimatePresence
          mode="wait"
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </MainLayout>
    </ChakraProvider>
  );
}

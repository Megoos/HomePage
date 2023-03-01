import { M_PLUS_Rounded_1c } from 'next/font/google';
import { extendTheme, ThemeOverride } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export const mPlusFont = M_PLUS_Rounded_1c({
  display: 'auto',
  weight: ['700'],
  variable: '--font-m-plus',
  subsets: ['latin'],
});

const styles: ThemeOverride['styles'] = {
  global: props => ({
    body: {
      bg: mode('#e6ded3', '#23272e')(props),
    },
  }),
};

const components: ThemeOverride['components'] = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: props => ({
      color: mode('#2e8dda', '#c678dd')(props),
      textUnderlineOffset: 3,
    }),
  },
};

const fonts: ThemeOverride['fonts'] = {
  heading: mPlusFont.style.fontFamily,
  ['m-plus']: mPlusFont.style.fontFamily,
};

const colors: ThemeOverride['colors'] = {
  grassOrange: '#f6d69a',
};

const config: ThemeOverride['config'] = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

export const theme = extendTheme({ config, styles, components, fonts, colors });

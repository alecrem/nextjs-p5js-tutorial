import { createSystem, defaultConfig, defineTokens } from '@chakra-ui/react'

const fonts = { mono: { value: `'Menlo', monospace` } }

const breakpoints = {
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
}

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        black: { value: '#16161D' },
        text: {
          default: { value: '#16161D' },
          _dark: { value: '#ade3b8' },
        },
        heroGradientStart: {
          default: { value: '#7928CA' },
          _dark: { value: '#e3a7f9' },
        },
        heroGradientEnd: {
          default: { value: '#FF0080' },
          _dark: { value: '#fbec8f' },
        },
      },
      radii: {
        button: { value: '12px' },
      },
      fonts,
    },
    breakpoints,
  },
})

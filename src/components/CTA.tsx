import { Link as ChakraLink, Button } from '@chakra-ui/react'

import { Container } from './Container'

export const CTA = () => (
  <Container
    flexDirection="row"
    position="fixed"
    bottom={0}
    width="full"
    maxWidth="3xl"
    py={3}
  >
    <ChakraLink
      href="https://qiita.com/alecrem/items/d7f159a39541c72b1712"
      asChild
    >
      <Button
        variant="surface"
        colorPalette="green"
        fontWeight="bold"
        borderRadius="xl"
        flexGrow={1}
        mx={2}
        maxW="50%"
      >
        Qiitaで説明を読む
      </Button>
    </ChakraLink>
    <ChakraLink href="https://github.com/alecrem/nextjs-p5js-tutorial" asChild>
      <Button
        variant="solid"
        colorPalette="green"
        color="white"
        fontWeight="bold"
        borderRadius="xl"
        flexGrow={1}
        mx={2}
        maxW="50%"
      >
        View Repo
      </Button>
    </ChakraLink>
  </Container>
)

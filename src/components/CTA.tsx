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
    <Button
      as={ChakraLink}
      isExternal
      href="https://qiita.com/alecrem/items/d7f159a39541c72b1712"
      variant="outline"
      colorScheme="green"
      rounded="button"
      flexGrow={1}
      mx={2}
      width="full"
    >
      Qiitaで説明を読む
    </Button>
    <Button
      as={ChakraLink}
      isExternal
      href="https://github.com/alecrem/nextjs-p5js-tutorial"
      variant="solid"
      colorScheme="green"
      rounded="button"
      flexGrow={3}
      mx={2}
      width="full"
    >
      View Repo
    </Button>
  </Container>
)

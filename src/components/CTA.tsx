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
      href="https://gist.github.com/alecrem/bd672f7d8f5c5ef99458dcedc09d9d61"
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

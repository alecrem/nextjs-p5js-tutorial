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
    <ChakraLink href="https://qiita.com/alecrem/items/d7f159a39541c72b1712">
      <Button
        // as={ChakraLink}
        variant="outline"
        colorScheme="green"
        rounded="button"
        flexGrow={1}
        mx={2}
        width="full"
      >
        Qiitaで説明を読む
      </Button>
    </ChakraLink>
    <ChakraLink href="https://github.com/alecrem/nextjs-p5js-tutorial">
      <Button
        // as={ChakraLink}
        variant="solid"
        colorScheme="green"
        rounded="button"
        flexGrow={3}
        mx={2}
        width="full"
      >
        View Repo
      </Button>
    </ChakraLink>
  </Container>
)

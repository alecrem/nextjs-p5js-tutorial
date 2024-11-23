import { Text, Link as ChakraLink } from '@chakra-ui/react'
import NextLink from 'next/link'
import { Container } from './Container'

export const CTA = () => (
  <Container
    flexDirection="row"
    position="fixed"
    bottom={0}
    width="full"
    maxWidth="3xl"
    py={3}
    bgColor="green.100"
  >
    <ChakraLink flexGrow={1} mx={2} maxW="50%" asChild>
      <NextLink href="https://qiita.com/alecrem/items/d7f159a39541c72b1712">
        <Text color="green.600" fontWeight="bold" mx="1em">
          Qiitaで説明を読む
        </Text>
      </NextLink>
    </ChakraLink>
    <ChakraLink flexGrow={1} mx={2} maxW="50%" asChild>
      <NextLink href="https://github.com/alecrem/nextjs-p5js-tutorial">
        <Text color="green.600" fontWeight="bold" mx="1em">
          View Repo
        </Text>
      </NextLink>
    </ChakraLink>
  </Container>
)

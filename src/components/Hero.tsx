import { Flex, Heading } from '@chakra-ui/react'
import { ColorModeButton } from './ui/color-mode'

export const Hero = ({
  title = 'with-chakra-ui-typescript',
}: {
  title: string
}) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
    bgClip="text"
    py="2em"
  >
    <Heading fontSize="72px" color="green.600">
      {title}
    </Heading>
    <ColorModeButton />
  </Flex>
)

import { Text, Code } from '@chakra-ui/react'
import { Hero } from '../components/Hero'
import { Container } from '@/components/Container'
import { DarkModeSwitch } from '@/components/DarkModeSwitch'
import { CTA } from '@/components/CTA'
import { Footer } from '@/components/Footer'
import { P5jsContainer } from '@/components/P5jsContainer'

const Index = () => (
  <Container height="100vh">
    <Hero />
    <Text color="text">
      Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code> +{' '}
      <Code>TypeScript</Code>.
    </Text>

    <Container maxW="container.sm" mt="2em" mb="2em" pl={0} pr={0}>
      <P5jsContainer />
    </Container>
    <DarkModeSwitch />
    <Footer>
      <Text>Next ❤️ Chakra</Text>
    </Footer>
    <CTA />
  </Container>
)

export default Index

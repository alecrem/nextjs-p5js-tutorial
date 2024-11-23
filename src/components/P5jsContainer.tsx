import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { AspectRatio, Center } from '@chakra-ui/react'
import { setup, draw, windowResized } from '@/lib/sketch'

const importFunction = () => import('react-p5').then((mod) => mod.default)
let Sketch: any = null
if (typeof window !== 'undefined') {
  Sketch = dynamic(importFunction, { ssr: false })
}

export function P5jsContainer() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <>
      {mounted && (
        <Center maxW="100vh">
          <AspectRatio width="100vh" maxW="container.sm" ratio={1}>
            <Sketch setup={setup} draw={draw} windowResized={windowResized} />
          </AspectRatio>
        </Center>
      )}
    </>
  )
}

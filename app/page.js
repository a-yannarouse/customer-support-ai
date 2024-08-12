import Chat from './components/Chat'
import { Providers } from './providers'

export default function Home() {
  return (
    <Providers>
      <Chat />
    </Providers>
  )
}
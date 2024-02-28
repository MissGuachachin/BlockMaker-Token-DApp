import { ConnectKitProvider } from "connectkit";
import { WagmiConfig } from "wagmi";
import { AppLayout } from './components/UI/Layouts'
import { Home } from './pages'
import { config } from './config/wagmi'

function App() {
  
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider>
        <AppLayout>
          <Home />
        </AppLayout>
      </ConnectKitProvider>
    </WagmiConfig>
  )
}

export default App
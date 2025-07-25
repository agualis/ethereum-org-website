import { WagmiProvider } from "wagmi"
import { type Locale, RainbowKitProvider } from "@rainbow-me/rainbowkit"

import { rainbowkitTestConfig } from "../../tests/e2e/fixtures/rainbow-kit-test"

import { rainbowkitConfig } from "@/config/rainbow-kit"

interface WalletProvidersProps {
  children: React.ReactNode
  locale: string | undefined
}

const WalletProviders = ({ children, locale }: WalletProvidersProps) => {
  const isLocalhost =
    typeof window !== "undefined" && window.location.hostname === "localhost"

  return (
    <WagmiProvider
      config={isLocalhost ? rainbowkitTestConfig : rainbowkitConfig}
    >
      <RainbowKitProvider
        locale={locale as Locale}
        appInfo={{
          appName: "RainbowKit Demo",
          learnMoreUrl: "/wallets",
        }}
      >
        {children}
      </RainbowKitProvider>
    </WagmiProvider>
  )
}

export default WalletProviders

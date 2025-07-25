import { mainnet } from "wagmi/chains"
import { getDefaultConfig } from "@rainbow-me/rainbowkit"
import {
  coinbaseWallet,
  metaMaskWallet,
  oneKeyWallet,
  rainbowWallet,
  walletConnectWallet,
  zerionWallet,
} from "@rainbow-me/rainbowkit/wallets"

export const rainbowKitConfigParams = {
  appName: "ethereum.org",
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
  chains: [mainnet] as const,
  wallets: [
    {
      groupName: "New to crypto",
      wallets: [
        coinbaseWallet,
        rainbowWallet,
        metaMaskWallet,
        zerionWallet,
        oneKeyWallet,
        walletConnectWallet,
      ],
    },
  ],
}

export const rainbowkitConfig = getDefaultConfig(rainbowKitConfigParams)

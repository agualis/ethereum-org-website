import { getDefaultConfig } from "@rainbow-me/rainbowkit"

import { mockWallet } from "./mockWallet"

import { rainbowKitConfigParams } from "@/config/rainbow-kit"

const rainbowKitTestConfigParams = {
  ...rainbowKitConfigParams,
  wallets: [
    ...rainbowKitConfigParams.wallets,
    {
      groupName: "Test",
      wallets: [mockWallet],
    },
  ],
  ssr: true,
}

export const rainbowkitTestConfig = getDefaultConfig(rainbowKitTestConfigParams)

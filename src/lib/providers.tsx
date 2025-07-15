'use client'

import { WagmiConfig } from "wagmi"
import { RainbowKitProvider } from "@rainbow-me/rainbowkit"
import { wagmiConfig, chains } from "./wagmi"
import { sepolia } from "wagmi/chains"

export function Web3Provider({children}: {children: React.ReactNode}) {
    return (
        <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={chains} initialChain={sepolia}>
                {children}
            </RainbowKitProvider>
        </WagmiConfig>
    )
}
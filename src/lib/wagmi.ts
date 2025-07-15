'use client';

import { sepolia } from 'wagmi/chains'
import { createConfig, configureChains } from 'wagmi'
import { jsonRpcProvider  } from 'wagmi/providers/jsonRpc'
import { getDefaultWallets } from '@rainbow-me/rainbowkit'

const { chains, publicClient } = configureChains(
    [sepolia],
    [
        jsonRpcProvider({
            rpc: () => ({
            http: "https://eth-sepolia.g.alchemy.com/v2/woShlFpCjT9thBCgtalMU", // Infura/Alchemy key kamu
            }),
        }),
    ]
)

const { connectors } = getDefaultWallets({
    appName: 'Wallet Trackers',
    projectId: '54d6db0ba3245bcd8db32ed9b95955a1',
    chains,
})

export const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient
})

export {chains}
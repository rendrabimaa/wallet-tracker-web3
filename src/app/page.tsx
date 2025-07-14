'use client'

import { WalletBalance } from '@/components/WalletBalance'
import { WalletInfo } from '@/components/WalletInfo'
import { ConnectButton } from '@rainbow-me/rainbowkit'

export default function Home() {
  return (
    <div className="h-full flex-grow flex flex-col flex-1 w-full items-center justify-center" >
        <h1 className="text-2xl font-bold mb-4 text-center">Wallet Tracker</h1>
        <ConnectButton/>
        <WalletInfo />
        <WalletBalance />
    </div>

  )
}
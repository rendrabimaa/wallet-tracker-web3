'use client'

import { WalletBalance } from '@/components/Wallet/WalletBalance'
import { WalletInfo } from '@/components/Wallet/WalletInfo'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <div className="h-full flex-grow flex flex-col flex-1 w-full items-center justify-center" >
        <h1 className="text-2xl font-bold mb-4 text-center">Wallet Tracker</h1>
        <ConnectButton/>
        <WalletInfo />
        <WalletBalance />
        <button
          onClick={() => router.push('/dashboard')}
          className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'
        >
          Go to Dashboard
        </button>
    </div>

  )
}
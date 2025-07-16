'use client'

import { useEffect, useState } from "react"
import { useAccount, useBalance } from "wagmi"
import { useNetwork } from "wagmi"
import { sepolia } from "wagmi/chains"

export const WalletBalance = () => {
  const [hasMounted, setHasMounted] = useState(false)
  const { address, isConnected } = useAccount()
  const { chain } = useNetwork()
  const { data, isLoading } = useBalance({
    address: address ?? undefined,
    chainId: chain?.id,
    watch: true,
    enabled: !!address,
  })

  console.log("Current chain ID:", chain?.id)
  console.log("Balance data:", data)
  console.log("Active address:", address)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted || !isConnected) return null

  if(chain?.id !== sepolia.id) {
    return <div className="text-red-500">⚠️ Please switch to Sepolia network</div>
  }
  if (isLoading) return <div>Loading Data...</div>

  return (
    <div className="text-lg text-green-600">
      Balance: {Number(data?.formatted).toFixed(4)} {data?.symbol}
      </div>
  )
}

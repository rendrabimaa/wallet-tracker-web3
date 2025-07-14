'use client'

import { useEffect, useState } from "react"
import { useAccount, useBalance } from "wagmi"

export const WalletBalance = () => {
  const [hasMounted, setHasMounted] = useState(false)
  const { address, isConnected } = useAccount()
  const { data, isLoading } = useBalance({
    address: address ?? undefined,
    watch: true,
    enabled: !!address,
  })

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted || !isConnected) return null

  if (isLoading) return <div>Loading Data...</div>

  return (
    <div>Balance: {data?.formatted} {data?.symbol}</div>
  )
}

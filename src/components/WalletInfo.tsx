'use client'

import { useEffect, useState } from "react"
import { useAccount } from "wagmi"

export const WalletInfo = () => {

    const [hasMounted, setHasMounted] = useState(false)
    const { address, isConnected } = useAccount()

    useEffect(() => {
        setHasMounted(true)
    }, [])

    if (!hasMounted) return null

    
    if(!isConnected) return <div className="my-4">Wallet not Connected yet</div>
    return <div className="my-4">Connected Wallet: {address}</div>
}
'use client'

import { useEffect, useState } from "react"
import { useAccount, useNetwork } from "wagmi"

export const WalletInfo = () => {

    const [hasMounted, setHasMounted] = useState(false)
    const { address, isConnected } = useAccount()
    const { chain } = useNetwork()

    useEffect(() => {
        setHasMounted(true)
    }, [])

    if (!hasMounted) return null

    
    if(!isConnected) return <div className="my-4">Wallet not Connected yet</div>
    return (
        <div className="p-4 bg-gray-100 rounded text-sm w-full max-w-md">
            <div className="mb-2"><strong>Address:</strong> <span className="break-all">{address}</span></div>
            <div><strong>Network:</strong> {chain?.name} (ID: {chain?.id})</div>
        </div>
    )
}
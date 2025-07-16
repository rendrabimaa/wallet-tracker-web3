'use client'

import { WalletInfo } from "@/components/Wallet/WalletInfo"
import { WalletBalance } from "@/components/Wallet/WalletBalance"
import DashboardLayout from "@/components/layout/DashboardLayout"
import { useAccount, useBalance, useNetwork } from "wagmi"
import { exportTokenList, exportWalletInfo } from "@/utils/export"
import { fetchTokenList } from "@/lib/fetchTokenList"
import { useEffect, useState } from "react"
import { TokenList } from "@/components/TokenList"

export default function DashboardPage() {
    const { address, isConnected } = useAccount()
    const { data } = useBalance({ address, watch: true })
    const { chain } = useNetwork()
    const [tokens, setTokens] = useState<any[]>([])
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (isConnected && address) {
            fetchTokenList(address).then(res => {
                setTokens(res?.tokenBalances || [])
            })
        }
    }, [isConnected, address])

    const handleExport = () => {
        exportWalletInfo({
            address: address || '',
            balance: Number(data?.formatted || 0).toFixed(4),
            network: chain?.name || 'Unknown',
        })
    }

    if (!mounted) return null

    return (
        <DashboardLayout>
            <WalletInfo />
            <WalletBalance />
            <TokenList />
            {isConnected && (
                <div>
                    <button
                        onClick={handleExport}
                        className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    >
                        Export Wallet Info
                    </button>

                    <button
                        onClick={() => exportTokenList(tokens)}
                        className="mt-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Export to CSV
                    </button>
                </div>
            )}
        </DashboardLayout>
    )
}
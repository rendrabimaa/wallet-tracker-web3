'use client'

import { WalletInfo } from "@/components/WalletInfo"
import { WalletBalance } from "@/components/WalletBalance"
import DashboardLayout from "@/components/layout/DashboardLayout"
import { useAccount, useBalance, useNetwork } from "wagmi"
import { exportWalletInfo } from "@/utils/export"

export default function DashboardPage() {
    const { address, isConnected } = useAccount()
    const { data } = useBalance({ address, watch: true })
    const { chain } = useNetwork()

    const handleExport = () => {
        exportWalletInfo({
        address: address || '',
        balance: Number(data?.formatted || 0).toFixed(4),
        network: chain?.name || 'Unknown',
        })
    }

    return (
        <DashboardLayout>
            <WalletInfo />
            <WalletBalance />
            {isConnected && (
                <button
                    onClick={handleExport}
                    className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                    Export Wallet Info
                </button>
            )}
        </DashboardLayout>
    )
}
'use client'

import { useEffect, useState } from "react"
import { fetchTokenList } from "@/lib/fetchTokenList"
import { useAccount } from "wagmi"
import { formatUnits } from "viem"

export function TokenList() {
    const { address, isConnected } = useAccount()
    const [tokens, setTokens] = useState<any[]>([])

    useEffect(() => {
        if(isConnected && address) {
            fetchTokenList(address).then(res => {
                console.log('ini Token list')
                console.log(res)

                setTokens(res)
            })
        }
    }, [address, isConnected])

    return (
        <div className="mt-4">
            {
                tokens.length === 0 ? (
                    <p>No Tokens Found.</p>
                ) : (
                    <div>
                        <h2 className="font-semibold mb-2">Token List ({tokens.length})</h2>
                        <ul className="list-disc ml-5 space-y-1">
                            {tokens.map((token, index) => {
                                const formatted = formatUnits(BigInt(token.tokenBalance || '0'), token.decimals || 18)
                                return (
                                    <li key={index} className="flex items-center space-x-3">
                                        {token.logo && (
                                            <img src={token.logo} alt={token.symbol} className="w-6 h-6 rounded-full" />
                                        )}
                                        <span>{token.name || 'Unknown'} ({token.symbol || '-'})</span>
                                        <span className="ml-auto">{Number(formatted).toFixed(4)}</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )
            }
        </div>
    )
}
import { saveAs } from 'file-saver'

export function exportWalletInfo({
    address,
    balance,
    network
}: {
    address: string
    balance: string,
    network: string
}) {
    const csvHeader = 'Address,Balance,Network\n'
    const csvData = `${address},${balance},${network}`
    const blob = new Blob([csvHeader + csvData], {
        type: 'text/csv;charset=utf-8',
    })
    saveAs(blob, 'wallet-info.csv')
}

export function exportTokenList(tokens: any[]) {
    const header = 'Address,Symbol,Balance\n'
    console.log('testt')
    console.log(tokens);
    const rows = tokens.map((token) => {
        const balance = BigInt(token.tokenBalance || '0')
        const formatted = (balance / 10n ** BigInt(token.decimals || 18)).toString()
        return `${token.contractAddress},${token.symbol || ''}, ${formatted}`
    })

    const csvContent = header + rows.join('\n')
    const blob = new Blob([csvContent], {
        type: 'text/csv;charset=utf-8'
    })
    saveAs(blob, 'token-list.csv')
}
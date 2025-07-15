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
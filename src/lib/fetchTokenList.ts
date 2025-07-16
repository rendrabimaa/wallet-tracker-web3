// import { Alchemy, Network } from "alchemy-sdk";

// const config = {
//     apiKey: 'woShlFpCjT9thBCgtalMU',
//     network: Network.ETH_SEPOLIA,
// }

// const alchemy = new Alchemy(config);

// export async function fetchTokenList(address: string) {
//     try {
//         const tokens = await alchemy.core.getTokenBalances(address);
//         console.log('Token List: ', tokens)
//         return tokens;
//     } catch (err) {
//         console.error('Failed fetch token list: ', err);
//         return null
//     }
// }
const apiKey = "woShlFpCjT9thBCgtalMU"
const baseUrl = `https://eth-sepolia.g.alchemy.com/v2/${apiKey}`

export async function fetchTokenList(address: string) {
    try {
        // Step 1: Fetch token balances
        const balancesRes = await fetch(baseUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            id: 1,
            jsonrpc: '2.0',
            method: 'alchemy_getTokenBalances',
            params: [address, "erc20"]
            })
        })

        const balancesData = await balancesRes.json()
        const tokens = balancesData?.result?.tokenBalances || []


        const tokensWithMetadata = await Promise.all(
            tokens.map(async (token: any) => {
                const metaRes = await fetch(baseUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                    id: 1,
                    jsonrpc: '2.0',
                    method: 'alchemy_getTokenMetadata',
                    params: [token.contractAddress]
                    })
                })
                const metaData = await metaRes.json()
        
                return {
                    contractAddress: token.contractAddress,
                    tokenBalance: token.tokenBalance,
                    name: metaData.result?.name,
                    symbol: metaData.result?.symbol,
                    logo: metaData.result?.logo,
                    decimals: metaData.result?.decimals
                }
            })
        )

        console.log("With metadata:", tokensWithMetadata)
        return tokensWithMetadata
    } catch (err) {
        console.error("Failed fetching token list or metadata:", err)
        return []
    }
}
  
import { Alchemy, Network } from "alchemy-sdk";

const config = {
    apiKey: 'woShlFpCjT9thBCgtalMU',
    network: Network.ETH_SEPOLIA,
}

const alchemy = new Alchemy(config);

export async function fetchTokenList(address: string) {
    try {
        const tokens = await alchemy.core.getTokenBalances(address);
        console.log('Token List: ', tokens)
        return tokens;
    } catch (err) {
        console.error('Failed fetch token list: ', err);
        return null
    }
}
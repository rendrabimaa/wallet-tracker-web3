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

export async function fetchTokenList(address: string) {
    const apiKey = "woShlFpCjT9thBCgtalMU";
    // https://eth-mainnet.g.alchemy.com/v2/woShlFpCjT9thBCgtalMU
    const url = 'https://eth-sepolia.g.alchemy.com/v2/woShlFpCjT9thBCgtalMU';
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    const body = JSON.stringify({
        id: 1,
        jsonrpc: "2.0",
        method: "alchemy_getTokenBalances",
        params: [
            "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
            "erc20"
        ]
    });
    
    return fetch(url, {
        method: 'POST',
        headers: headers,
        body: body
    })
    .then(response => response.json())
    .then(data => {
        console.log('testtingg')
        console.log(data)
        return data.result
    })
    .catch(error => console.error('Error:', error));
  }
  
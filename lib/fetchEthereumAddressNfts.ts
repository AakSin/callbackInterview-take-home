import { isAddress } from 'web3-validator';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        'X-API-KEY': `${process.env.SIMPLEHASH_API_KEY}`,
    },
};

interface NFT {
    image_url: string;
    name: string;
    nft_id: string;
    contract_address: string;
    token_id: string;
    description: string;
}

interface NFTMessage {
    message: string;
    status: number;
    nfts: Array<NFT>;
}

const fetchEthereumAddressNfts = async (address: string) => {
    if (isAddress(address)) {
        const data = await fetch(
            `https://api.simplehash.com/api/v0/nfts/owners?chains=ethereum&wallet_addresses=${address}&limit=50`,
            options
        );

        // empty response message to be populated from API
        const responseMessage: NFTMessage = {
            status: 0,
            message: '',
            nfts: [],
        };
        responseMessage.status = data.status;
        const nfts = await data.json();
        responseMessage.message = nfts.message;
        responseMessage.nfts = nfts.nfts;

        return responseMessage;
    } else {
        // custom response message upon failing Web3-Address-Validator
        const responseMessage: NFTMessage = {
            status: 404,
            message: 'The given address is not an ethereum address.',
            nfts: [],
        };
        return responseMessage;
    }
};

export default fetchEthereumAddressNfts;
export type { NFT, NFTMessage };

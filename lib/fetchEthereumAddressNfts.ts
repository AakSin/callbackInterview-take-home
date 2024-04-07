import { isAddress } from 'web3-validator';

const options = {
    cache: 'no-store',
    method: 'GET',
    headers: {
        accept: 'application/json',
        'X-API-KEY':
            'nyu_sk_bb236117-abff-4052-8efc-f9a375b795d2_q0mhv1pi53njysk4',
    },
};

interface NFT {
    image_url?: string;
    name: string;
    nft_id: string;
    contract_address: string;
    token_id: string;
}

interface NFTMessage {
    message: string;
    status: number;
    nfts?: any;
}

const fetchEthereumAddressNfts = async (address: string) => {
    if (isAddress(address)) {
        const data = await fetch(
            `https://api.simplehash.com/api/v0/nfts/owners?chains=ethereum&wallet_addresses=${address}&limit=50`,
            options
        );
        const responseMessage: NFTMessage = { status: 0, message: '' };
        responseMessage.status = data.status;
        const nfts = await data.json();
        responseMessage.message = nfts.message;
        responseMessage.nfts = nfts.nfts;

        return responseMessage;
    } else {
        const responseMessage: NFTMessage = {
            status: 404,
            message: 'The given address is not an ethereum address.',
        };
        return responseMessage;
    }
};

export default fetchEthereumAddressNfts;
export type { NFT, NFTMessage };

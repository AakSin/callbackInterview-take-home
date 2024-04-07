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
        let responseMessage: NFTMessage = { status: 0, message: '' };
        responseMessage.status = data.status;
        let nfts = await data.json();
        responseMessage.message = nfts.message;
        responseMessage.nfts = nfts.nfts;

        return responseMessage;
    } else {
        let responseMessage: NFTMessage = {
            status: 404,
            message: 'The given address is not an ethereum address.',
        };
        return responseMessage;
    }
};

export default fetchEthereumAddressNfts;

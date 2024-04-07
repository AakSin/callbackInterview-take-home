const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        'X-API-KEY':
            'nyu_sk_bb236117-abff-4052-8efc-f9a375b795d2_q0mhv1pi53njysk4',
    },
};

const fetchEthereumAddressNfts = async (address: string) => {
    const data = await fetch(
        `https://api.simplehash.com/api/v0/nfts/owners?chains=ethereum&wallet_addresses=${address}&limit=50`,
        options
    );
    let nfts = await data.json();

    return nfts.nfts;
};

export default fetchEthereumAddressNfts;

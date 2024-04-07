import React from 'react';
import fetchEthereumAddressNfts from '@/lib/fetchEthereumAddressNfts';
import NFTCard from '@/components/NFTCard';

const page = async ({ params }: { params: { address: string } }) => {
    const nfts: any = await fetchEthereumAddressNfts(params.address);
    const imageNfts = await nfts.filter((nft: any) => nft.image_url != null);
    return (
        <div>
            {imageNfts.map(
                (imageNft: any) => (
                    <NFTCard
                        key={imageNft.nft_id}
                        imageUrl={imageNft.image_url}
                        name={imageNft.name}
                        contractAddress={imageNft.contract_address}
                        tokenId={imageNft.token_id}
                    ></NFTCard>
                )
                // console.log(image_url)
            )}
        </div>
    );
};

export default page;

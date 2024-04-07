import React from 'react';
import fetchEthereumAddressNfts from '@/lib/fetchEthereumAddressNfts';
import NFTCard from '@/components/NFTCard';
import ErrorScreen from '@/components/ErrorScreen';
import type { NFT, NFTMessage } from '@/lib//fetchEthereumAddressNfts';

const page = async ({ params }: { params: { address: string } }) => {
    const nfts: NFTMessage = await fetchEthereumAddressNfts(params.address);

    if (nfts.status == 200) {
        // filter out non-static image NFTS
        const imageNfts = await nfts.nfts.filter((nft: NFT) => !!nft.image_url);

        if (imageNfts.length > 0) {
            return (
                <div className="flex flex-wrap items-center justify-center">
                    {imageNfts.map((imageNft) => (
                        <NFTCard
                            key={imageNft.nft_id}
                            imageUrl={imageNft.image_url}
                            name={imageNft.name}
                            contractAddress={imageNft.contract_address}
                            tokenId={imageNft.token_id}
                            description={imageNft.description}
                        />
                    ))}
                </div>
            );
        } else {
            return (
                <ErrorScreen errorMessage={'This account has no image NFTS.'} />
            );
        }
    } else {
        return <ErrorScreen errorMessage={nfts.message} />;
    }
};

export default page;

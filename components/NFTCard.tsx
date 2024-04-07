import Image from 'next/image';
import React from 'react';

interface Props {
    imageUrl: string;
    name: string;
    contractAddress: string;
    tokenId: string;
}

const NFTCard = (props: Props) => {
    return (
        <div>
            <a
                href={`https://opensea.io/assets/ethereum/${props.contractAddress}/${props.tokenId}`}
                target="_blank"
                rel="noreferrer"
            >
                <Image
                    src={props.imageUrl}
                    alt={props.name}
                    width={200}
                    height={200}
                ></Image>

                <h1>{props.name}</h1>
            </a>
        </div>
    );
};

export default NFTCard;

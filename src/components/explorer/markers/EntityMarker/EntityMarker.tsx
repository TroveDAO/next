import React from 'react';

const EntityMarker = ({ ipfsUrl }) => {
    return (
        <>
         <img src={`https://ipfs.io/ipfs/${ipfsUrl}`} />
        </>
    )
}

export default EntityMarker;
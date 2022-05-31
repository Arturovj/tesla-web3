import { useWeb3React } from '@web3-react/core';
import { useMemo } from 'react';
import teslaArtifacts from '../../../backend/config/artifacts/teslas';

const { address, abi } = teslaArtifacts

const useTeslas = () => {
    const { active, library, chainId } = useWeb3React();
    const teslas = useMemo(() => {
        if(active) {
            return new library.eth.Contract(abi, address[chainId]);
        }
    }, [active, library?.eth?.Contract, chainId]);
    return teslas;
};

export default useTeslas;
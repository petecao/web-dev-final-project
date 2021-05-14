import React, { useEffect, useState } from 'react';
import StockScreen from './StockScreen';
import { useHistory } from 'react-router'

export type StockInfo = {
    readonly name: string,
    readonly price: number,
    readonly favorite: boolean,
    readonly num_shares: number
}

export type Stock = {
    readonly name: string,
    readonly price: number
};

const StockData = () => {

    const [currstock, setCurrstock] = useState<Stock>();

    const history = useHistory();

    useEffect(() => {
        fetch(history.location.pathname, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
        })
            .then((response) =>
                response.json())
            .then((d) => setCurrstock(d));
    }, [currstock, history])



    // useEffect(() => {
    //     fetch(`/userStocks/${firebase.auth().currentUser?.getIdToken}`)
    //       .then(res => res.json())
    //       .then(data => {
    //         setCurrstocks(data);
    //       })
    //   }, [currstocks])

    return (
        <div>
            Stock Information
            <StockScreen stock={currstock ?? { name: "N/A", price: 0 }} />

        </div>
    )
}

export default StockData;
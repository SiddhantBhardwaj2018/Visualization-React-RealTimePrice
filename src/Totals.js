import React from "react";
import Total from "./Total";
import round from "./round";

export default function Totals({ priceArr, freqInDays, amountToInvest }) {
  const numOfDays = priceArr.length;
  let coinAmount = 0;
  for (let i = 0; i < numOfDays; i += freqInDays) {
    const coinValue = priceArr[i][1];
    coinAmount += amountToInvest / coinValue;
  }

  const totalCoinAmount = coinAmount;
  const totalInvested = amountToInvest * Math.floor(numOfDays / freqInDays);
  const endTotal = totalCoinAmount * priceArr[priceArr.length - 1][1];
  const numberGained = endTotal - totalInvested;
  const percentGained = ((endTotal - totalInvested) / totalInvested) * 100;

  return (<div>
      <Total title={"Ending Value (USD)"} value={`$${round(endTotal, 2)}`} />
      <Total title={"Amount of Coin (BTC)"} value={round(totalCoinAmount, 5)} />
      <Total
        title={"Amount Invested (USD)"}
        value={`$${round(totalInvested, 2)}`}
      />
      <Total title={"Gained (USD)"} value={`$${round(numberGained, 2)}`} />
      <Total title={"Gained (%)"} value={`${round(percentGained, 2)}%`} />
  </div>);
}
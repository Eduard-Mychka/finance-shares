import React from 'react'
import { tickersMap } from '../staticData'

const ShareItem = ({ share }) => {
  return (
    <tr className="rows">
      <td className="">
        <span
          className="share-ticker-color"
          style={{ backgroundColor: tickersMap[share.ticker].bgColors }}
        >
          {share.ticker}
        </span>
        <span className="share-ticker-name">
          {tickersMap[share.ticker].name}
        </span>
      </td>
      <td className="exchange">{share.exchange}</td>
      <td>{share.price}&nbsp;$</td>
      <td>{share.change}</td>
      <td>{share.change_percent}&nbsp;%</td>
      <td>{share.dividend}</td>
      <td>{share.yield}</td>
      <td>{share.last_trade_time}</td>
    </tr>

  )
}
export default ShareItem;


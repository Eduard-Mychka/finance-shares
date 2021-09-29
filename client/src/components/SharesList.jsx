import React from 'react'
import ShareItem from './ShareItem'
import { v4 as uuidv4 } from 'uuid';

const SharesList = ({ shares }) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Ticker</th>
          <th scope="col">Exchange</th>
          <th scope="col">Price(USD)</th>
          <th scope="col">Change</th>
          <th scope="col">Change percent</th>
          <th scope="col">Dividend</th>
          <th scope="col">Yield</th>
          <th scope="col">Last trade time</th>
        </tr>
      </thead>
      <tbody>
        {shares &&
          shares.map(share => (
            <ShareItem key={uuidv4()} share={share} />
          ))
        }
      </tbody>
    </table >
  )
}

export default SharesList;
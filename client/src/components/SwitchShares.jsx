import React from 'react'
import { tickersMap } from '../staticData'

export default function SwitchShares({ ticker, onChangeSwitch }) {
  return (
    <div className="card col-2">
      <div className="card-body">
        <span
          className="share-ticker-color"
          style={{ backgroundColor: tickersMap[ticker].bgColors }}
        >
          {ticker}
        </span>
        {/* <span>{price}&nbsp;$</span> */}
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
          // onChange={(e) => onChangeSwitch(e)}
          // value={ticker}
          />
          <label
            className="form-check-label"
            htmlFor="flexSwitchCheckDefault"
          >
            Switch
          </label>
        </div>
      </div>
    </div>
  )
}

import { v4 as uuidv4 } from 'uuid';
import SwitchShares from './SwitchShares';

export default function CardShares({ listSwitchShare, onChangeSwitch, }) {

  // console.log(listSwitchShare)
  return (
    <div className="row justify-content-around mb-3 mt-3">
      {listSwitchShare &&
        listSwitchShare.map(switchShare => (
          <SwitchShares
            key={uuidv4()}
            // onChangeSwitch={onChangeSwitch}
            // isActive={isActive}
            ticker={switchShare.ticker}
          />
        ))
      }
    </div >
  )
}

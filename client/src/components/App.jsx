import logo from '../assets/images/growth.svg'
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

import SharesList from "./SharesList";
import Footer from './Footer';
import CardShares from './CardShares';


const socket = io.connect('http://localhost:4000');
socket.emit('start');

const App = () => {
  const [shares, setShares] = useState([])
  const [listSwitchShare, setListSwitchShare] = useState([])
  // const [isActive, setIsActive] = useState([])
  // console.log(tolik.name)

  useEffect(() => {
    socket.on("ticker", (response) => {
      setShares(response)

      const ticker = response.map(item => {
        return {
          ticker: item.ticker
        }
      })

      if (listSwitchShare.length === 0) {
        setListSwitchShare(ticker)
      }
    });
  }, []);

  // useEffect(() => {
  //   setListSwitchShare(shares)
  // }, [shares]);

  // const onChangeSwitch = (e) => {
  //   console.log(e.target.checked)
  //   if (e.target.checked && !isActive.includes(ticker)) {
  //     setIsActive([...isActive, ticker])
  //   }

  //   if (!e.target.checked) {
  //     setIsActive(isActive.filter(item => item !== ticker))
  //   }
  // }

  return (
    <div className="wrapper">
      <header>
        <img src={logo} alt="website-logo" />
        <h1>Shares Investment</h1>
      </header>
      <main>
        <CardShares
          // onChangeSwitch={onChangeSwitch}
          listSwitchShare={listSwitchShare}
        />
        <div className="shares-table">
          <SharesList shares={shares} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

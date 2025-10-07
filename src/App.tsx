import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import { IClockList } from './types/interfaces';
import WatchList from './components/WatchList';

function App() {
  const [clockList, setclockList] = useState<IClockList[]>([]);

  const [time, setTime] = useState<string>('');

  function getTime(): string {
    const currentTime = new Date();

    const hours = currentTime.getUTCHours() < 10 ? '0' + currentTime.getUTCHours() : currentTime.getUTCHours();
    const minutes = currentTime.getUTCMinutes() < 10 ? '0' + currentTime.getUTCMinutes() : currentTime.getUTCMinutes();
    const seconds = currentTime.getUTCSeconds() < 10 ? '0' + currentTime.getUTCSeconds() : currentTime.getUTCSeconds();

    const stringedTime = `${hours}:${minutes}:${seconds}`;
    return stringedTime;
  }
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime())
    }, 1000);
    getTime();

    return () => {
      clearInterval(interval);
    }
  }, [time]);

  function submitFormHandler(info: IClockList) {
    setclockList([...clockList, { title: info.title, timezone: info.timezone }]);
  }

  function removeHandler(id: number) {
    const updatedClockList: IClockList[] = clockList.filter((e, ind) => {
      if (ind !== id) {
        return e;
      }
    });
    setclockList([...updatedClockList]);
  }


  return (
    <div className='watches'>
      <h1 className='whatchesH1'>Часы</h1>
      <Form submitFormHandler={submitFormHandler} />
      <WatchList list={clockList} removeHandler={removeHandler} time={time} />
    </div>
  )
}

export default App

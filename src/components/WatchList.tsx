import { IClockList } from "../types/interfaces"
import Watch from "./Watch";

interface IProps {
  list: IClockList[];
  removeHandler: (id: number) => void;
  time: string;
}

const WatchList = ({ list, removeHandler, time }: IProps) => {
  return (
    <div className='clocks'>
      {list.length > 0 ? list.map((e, ind) => <Watch key={ind} removeHandler={removeHandler} number={ind} info={e} time={time} />) : <span>Пока не добавлено часов</span>}
    </div>
  )
}

export default WatchList

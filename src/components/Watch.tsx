import { IClockList } from "../types/interfaces";

interface IProps {
  removeHandler: (id: number) => void;
  number: number;
  info:  IClockList;
  time: string;
}



const Watch = ({ removeHandler, number, info, time }: IProps) => {
  function getZonedTime(time: string): string {
    if (time == '') {
      return 'загрузка...';
    }
    const splitedTime = time.split(':');
    const hours = splitedTime[0];
    const minutes = splitedTime[1];
    const seconds = splitedTime[2];

    let updatedHours;
    if ((Number(hours) + Number(info.timezone)) < 0) {
      updatedHours = 24 + (Number(hours) + Number(info.timezone));
    } else if ((Number(hours) + Number(info.timezone)) > 23) {
      updatedHours = (Number(hours) + Number(info.timezone)) - 24;
    } else {
      updatedHours = Number(hours) + Number(info.timezone);
    }

    const zonedTime = `${updatedHours}:${minutes}:${seconds}`;

    return zonedTime;
  }

  const onClickHandler = () => {
    removeHandler(number);
  }

  return (
    <div className="clockContainer">
      <h6>{info.title}</h6>
      <div className="clock">{getZonedTime(time)}</div>
      <button name="button" type="button" className="remove" onClick={onClickHandler}>Удалить</button>
    </div>
  )
}

export default Watch

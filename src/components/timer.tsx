import { secondToTime } from "../utils/seconds-to-time"

interface Props {
    mainTime: number
}


export function Timer(props: Props) {
    return (
       <div className="timer"> {secondToTime(props.mainTime)}</div>
    )
}
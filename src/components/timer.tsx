import { secondToMinutes } from "../utils/seconds-to-minutes"

interface Props {
    mainTime: number
}


export function Timer(props: Props) {
    return (
       <div className="timer"> {secondToMinutes(props.mainTime)}</div>
    )
}
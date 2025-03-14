import { useState } from 'react';
import { useInterval } from "../hooks/use-interval";
import { secondToTime } from '../utils/seconds-to-time';

interface Props {
    defaulPomodoroTimer: number;
}

export function PomodoroTimer(props: Props) {
    const [mainTime, setMaintime] = useState(props.defaulPomodoroTimer)

    useInterval(() => {
        setMaintime(mainTime - 1)
    }, 1000)

    return <div>Olá mundo {secondToTime(mainTime)}</div>
}
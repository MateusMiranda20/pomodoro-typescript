import { useState } from 'react';
import { useInterval } from "../hooks/use-interval";
import { Button } from './button';
import { Timer } from './timer';

interface Props {
    pomodoroTime: number;
    shortRestTime: number;
    longResTime: number;
    cycles: number;
}

export function PomodoroTimer(props: Props) {
    const [mainTime, setMaintime] = useState(props.pomodoroTime)

    useInterval(() => {
        setMaintime(mainTime - 1)
    }, 1000)

    return (
        <div className='pomodoro'>
            <h2>You are: workimg</h2>
            <Timer mainTime={mainTime} />
            <Button text='Teste' onClick={() => console.log(1)}></Button>
        </div>
    )
}
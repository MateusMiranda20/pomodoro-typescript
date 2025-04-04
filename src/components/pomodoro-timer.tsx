import { useEffect, useState } from 'react';
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
    const [timeCount, setTimeCount] = useState(false)
    const [working, setWorking] = useState(false)
    const [resting, setResting] = useState(false)

    useEffect(() => {
        if (working) document.body.classList.add('working')
        if (resting) document.body.classList.remove('working')
    }, [working, resting]);

    useInterval(() => {
        setMaintime(mainTime - 1)
    }, timeCount ? 1000 : null)

    const configWork = () => {
        setTimeCount(true)
        setWorking(true)
        setResting(false)
        setMaintime(props.pomodoroTime)
    }

    const configResting = (long: boolean) => {
        setTimeCount(true)
        setWorking(false)
        setResting(true)

        if (long) {
            setMaintime(props.longResTime)
        } else {
            setMaintime(props.shortRestTime)
        }
    }
    return (
        <div className='pomodoro'>
            <h2>You are: working</h2>
            <Timer mainTime={mainTime} />

            <div className="controls">
                <Button text='Trabalhar' onClick={() => configWork()}></Button>
                <Button text='Descansar' onClick={() => configResting(false)}></Button>
                <Button
                    className={!working && !resting ? 'hidden' : ''}
                    text={timeCount ? 'Pausar' : 'Voltar'}
                    onClick={() => setTimeCount(!timeCount)}
                ></Button>
            </div>

            <div className="details">
                <p>Testando: Mateus miranda inacio pereira dos santos</p>
                <p>Testando: Mateus miranda inacio pereira dos santos</p>
                <p>Testando: Mateus miranda inacio pereira dos santos</p>
            </div>
        </div>
    )
}
import { useCallback, useEffect, useState } from 'react';
import { useInterval } from "../hooks/use-interval";
import { Button } from './button';
import { Timer } from './timer';
import { secondToTime } from '../utils/seconds-to-time';

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
    const [cyclesQtd, setCyclesQtd] = useState(new Array(props.cycles).fill(true))
    const [completeCycles, setCompleteCycles] = useState(0)
    const [fullWorkingTime, setFullWorkingTime] = useState(0)
    const [numberOfPomodoros, setNumberOfPomodoros] = useState(0)

    useInterval(() => {
        setMaintime(mainTime - 1)
        if(working) setFullWorkingTime(fullWorkingTime + 1)
    }, timeCount ? 1000 : null)

    const configWork = useCallback(() => {
        setTimeCount(true)
        setWorking(true)
        setResting(false)
        setMaintime(props.pomodoroTime)
    }, [setTimeCount, setWorking, setResting, setMaintime, props.pomodoroTime])

    const configResting = useCallback((long: boolean) => {
        setTimeCount(true)
        setWorking(false)
        setResting(true)

        if (long) {
            setMaintime(props.longResTime)
        } else {
            setMaintime(props.shortRestTime)
        }
    }, [setTimeCount, setMaintime, setWorking, setResting, props.longResTime, props.shortRestTime])

     useEffect(() => {
        if (working) document.body.classList.add('working')
        if (resting) document.body.classList.remove('working')

        if(mainTime > 0) return;

        if(working && cyclesQtd.length > 0){
            configResting(false)
            cyclesQtd.pop()
        } else if (working && cyclesQtd.length <= 0) {
            configResting(false)
            setCyclesQtd(new Array(props.cycles - 1).fill(true))
            setCompleteCycles(completeCycles + 1)
        }

        if(working) setNumberOfPomodoros(numberOfPomodoros + 1)
        if(resting) configWork()

    }, [working, resting, mainTime, cyclesQtd, numberOfPomodoros, completeCycles, configResting, setCyclesQtd, configWork, props.cycles]);
   

    return (
        <div className='pomodoro'>
            <h2>Você está: {working ? 'Trabalhando' : 'Descansando'}</h2>
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
                <p>Ciclos concluídos: {completeCycles}</p>
                <p>Horas trabalhadas: {secondToTime(fullWorkingTime)}</p>
                <p>Pomodoros concluídos: {numberOfPomodoros}</p>
            </div>
        </div>
    )
}
import React, { useState, useEffect } from 'react'


const Button = () => {
    const [Hour, setHour] = useState<number>(0);
    const [Min, setMin] = useState<number>(0);
    const [Second, setSecond] = useState<number>(0);
    const [Stop, setStop] = useState<boolean>(true)

    const start = () => {

        setStop(false);
        console.log('value TRUE krdi ha')

    }

    const stop = () => {

        setStop(true)
        console.log('value FALSE krdi ha')
    }


    const reset = () => {
        setHour(0)
        setMin(0)
        setSecond(0)
    }

    useEffect(() => {
        let inter: any = null;
        if (Stop === false) {

            inter = setInterval(() => {

                setSecond(Second + 1)
                if (Second === 60) {
                    setMin(Min + 1);
                    setSecond(0);
                    clearInterval(inter);
                }

                if (Min === 10) {
                    setHour(Hour + 1);
                    setMin(0);
                    setSecond(0);
                }

            }, 1000)
        }
        else {
            clearInterval(inter);
        }
        return () => {
            clearInterval(inter);
        }
    })

    return (
        <>

            <div>
                <p style={{ fontSize: '4rem' }}>{Hour}:{Min}:{Second}</p>
            </div>
            <div >
                <button style={{ marginRight: '5px', width: '80px', height: '30px', borderRadius: '5px', background: 'green', fontSize: '1rem', cursor: 'pointer' }}
                    onClick={() => { start() }}>Start</button>
                <button style={{ marginRight: '5px', width: '80px', height: '30px', borderRadius: '5px', background: 'Red', fontSize: '1rem', cursor: 'pointer' }}
                    onClick={() => { stop() }}>Stop</button>
                <button style={{ width: '80px', height: '30px', borderRadius: '5px', background: 'Orange', fontSize: '1rem', cursor: 'pointer' }} onClick={() => { reset() }} >Reset</button>
            </div>
        </>
    )
}

export default Button;



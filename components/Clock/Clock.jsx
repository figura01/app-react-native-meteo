import { useEffect, useState } from 'react';

import { s } from './Clock.style'
import { Txt } from '../Txt/Txt';
import { nowToHHMM } from '../../services/date-service';

export function Clock() {
    const [time, setTime] = useState(nowToHHMM());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(nowToHHMM());
        }
        , 1000);
        return () => clearInterval(interval);
    }, [time])
    return ( 
        <>
            <Txt style={s.time}>
                {nowToHHMM()}
            </Txt>
        </>
    );
}
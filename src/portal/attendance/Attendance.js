import { useState } from 'react';
import Calendar from 'rc-year-calendar';
import 'rc-year-calendar/locales/rc-year-calendar.es';

function Attendance() {
    const [days, setDays] = useState(['2022-06-04', new Date('2022-06-05'),new Date('2022-06-07')])

    const data=days.map(d=> {return {startDate:new Date(d), endDate:new Date(d), color:'#fe6601'}})
    return (
        <>
            <Calendar
                currentYear={new Date().getFullYear()}
                minDate={null}
                maxDate= {null}
                language= {'es'}
                style='background'
                allowOverlap= {true}
                enableRangeSelection= {false}
                displayWeekNumber= {false}
                roundRangeLimits={false}
                alwaysHalfDay={false}
                dataSource={data}
            />
        </>
    );
}

export {Attendance};
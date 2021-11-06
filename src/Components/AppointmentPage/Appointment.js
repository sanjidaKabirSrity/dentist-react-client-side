import React from 'react';
import Header from '../../Shared/Header/Header';
import AppointmentBanner from './AppointmentBanner'
import AppointmentTime from './AppointmentTime';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Header/>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AppointmentTime date={date} setDate={setDate}></AppointmentTime>
        </div>
    );
};

export default Appointment;
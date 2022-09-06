import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import React, { useState, useEffect } from 'react';
import './style.css';

function TimePickerNode(props) {
    let data = props?.data;
    data.type = "timepicker";

    useEffect(() => {
        props?.componentDidMount();
    }, []);




    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };


    return (
        <div
            className="inputtext"
            style={{ outline: "none" }}
            tabIndex="0">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack>
                    <TimePicker
                        label="Time"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </Stack>
            </LocalizationProvider>
        </div>
    );
}

export default TimePickerNode;
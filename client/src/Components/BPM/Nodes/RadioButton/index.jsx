import './style.css';
import Tooltip from '../Tooltip';
import { constants } from '../../../../Utils/constants'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';
import { Resizable } from "re-resizable";

function RadioButton(props) {
    let data = props?.data;
    data.type = "radiobutton";

    const onClickSetting = () => {
        props?.properties(data);
    }

    const onClickDelete = () => {
        props?.delete(data);
    }

    const [checked, setChecked] = useState("");

    const handleChange = event => {
        setChecked(event.target.value);
    };

    let element = (
        <Resizable
            style={{ textAlign: "center" }}
            defaultSize={{ width: data?.width, height: data?.height }}
            onResizeStart={props?.handleResizeStart}
            minWidth={data?.minWidth}
            minHeight={data?.minHeight}
            maxHeight={data?.maxHeight}
            maxWidth={data?.maxWidth}
            handleStyles={props?.handleStyles}
            handleComponent={props?.handleComponent}
            resizeRatio={1}
        >
            <div className='input-field-node'>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">{data?.question} :</FormLabel>
                    <div className='checkboxes'>

                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                            onChange={handleChange}
                        >
                            {data?.options?.map((item) => {
                                return <FormControlLabel value={item.value} control={<Radio checked={checked === item.value} />} key={item.id} label={item.value} />
                            })}
                        </RadioGroup>
                    </div>
                </FormControl>
            </div>
        </Resizable>
    )

    const iconStyle = { height: "23px", width: "23px", marginTop: "4px", marginLeft: "4px", marginRight: "4px", cursor: "pointer" };

    return (
        <div className="checkbox-base">
            <Tooltip element={element} tooltip={<div style={{ display: "block" }}>
                <constants.AiOutlineSetting onClick={onClickSetting} style={iconStyle} />
                <constants.AiOutlineDelete onClick={onClickDelete} style={iconStyle} />
            </div>} />
        </div>
    );
}

export default RadioButton;
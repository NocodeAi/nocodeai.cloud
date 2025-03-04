import {useState} from 'react';
import {
    singleDataChange
} from '../../../FunctionalData'

export default function TextArea(props) {
    const [name, setName] = useState(props?.data?.label);
    const [charLength, setCharLength] = useState(props?.data?.charLength);
    return (
        <div className='properties'>
            <span className='properties-header'>Properties</span>
            <div visibility={props?.visibility?.toString()} className='properties-components'>
                <h3 style={{ textAlign: "center" }}>Text Area</h3>
                <span>Name:</span>
                <input value={name} onChange={(e) => {setName(e.target.value); singleDataChange(e.target.value, props?.data?.id, "label", props?.elements, props?.setElements);}} type="text" />
                <span>Max Length:</span>
                <input value={charLength} onChange={(e) => {setCharLength(e.target.value); singleDataChange(e.target.value, props?.data?.id, "charLength", props?.elements, props?.setElements);}} type="number" />
            </div>
        </div>
    )
}
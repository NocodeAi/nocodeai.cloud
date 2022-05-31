import '../style.css';
import { Handle } from 'react-flow-renderer';

function Heading(props) {
    let data = props.data;

    let style = { 
        height: data.height,
        fontSize: data.size,
        width: data.width,
        backgroundColor: data.backgroundColor,
        color: data.textColor,
        paddingTop: data.paddingTop,
        paddingBottom: data.paddingDown,
        paddingLeft: data.paddingLeft,
        paddingRight: data.paddingRight
    }
    return (
        <div className="flow-label">
            <div className='heading-node'>
      
               <label >{data.name}</label>
            </div>
            
        </div>
    );
}

export default Heading;
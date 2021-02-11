import React ,{memo} from 'react'

const Component2 = (props) => {
    console.warn("inner component", props.data)
    return (
        <div>
            <h1>Inner compoent</h1>
        </div>
    );
};

export default  memo(Component2);
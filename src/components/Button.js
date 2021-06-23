import { useDispatch } from 'react-redux';

function Button(props) {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch({ type: 'ADD_VALUE',  payload: props.value })}>{props.value}</button>
        </div>
    );
}

export default Button;


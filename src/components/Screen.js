import { useSelector } from 'react-redux'

function Screen() {
    
    const expression = useSelector((state) => state.expression);
    console.log(expression);
    return (
        <div>
            {expression}
        </div>
    );
}

export default Screen;
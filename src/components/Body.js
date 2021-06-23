import Button from './Button';

function Body() {
    const numberButtons = Array.from(Array(10).keys()).map(number => <Button key = {number} value={number} />);
    return (
        <div>
            {numberButtons}
        </div>
    );
}

export default Body;
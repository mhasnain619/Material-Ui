import Button from '@mui/material/Button';
import { useState } from 'react';
import Delete from '@mui/icons-material/Delete';

const Buttonpo = () => {
    const [color, setColor] = useState('info');
    // const [disabledBtn, setDisabledBtn] = useState(false);
    function handleClicked() {
        setColor('secondary')
        // setDisabledBtn(true)
    }

    return (
        <>
            <div className='App'>
                <h1>React-Mui</h1>
                <Button
                    color={color}
                    size='medium'
                    endIcon={<Delete />}
                    // disabled={disabledBtn}
                    variant='outlined'
                    onClick={handleClicked}
                >Material UI Button</Button>

            </div>
        </>


    )
}

export default Buttonpo

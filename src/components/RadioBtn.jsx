import Radio from '@mui/material/Radio'
import { useState } from 'react'

const RadioBtn = () => {
    const [gender, setGender] = useState('male')
    const getMaleValue = (e) => {
        console.warn(e.target.value);
        setGender(e.target.value)
    }
    return (
        <div>
            <h1>React Material UI | Radio Button</h1>
            <div>

                <Radio
                    color='primary'
                    value='Male'
                    onChange={getMaleValue}
                    checked={gender === 'male'}

                />
                <span>Male</span>
            </div>
            <div>

                <Radio
                    value='Female'
                    onChange={getMaleValue}
                    checked={gender === 'female'}
                />
                <span>Female</span>
            </div>
        </div>
    )
}

export default RadioBtn

import { Checkbox } from '@mui/material';
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { useState } from "react";

const CheckBox = () => {
    const [name, SetName] = useState([])
    function getValue(e) {
        let data = name;
        data.push(e.target.value)
        console.log(data);
    }
    return (
        <div>
            <h1>React Material UI | Checkbox</h1>
            <Checkbox color='primary' value='Anaintay' onChange={(e) => { getValue(e) }} />
            <Checkbox color='primary' value='Hasnain' onChange={(e) => { getValue(e) }} />
            <Checkbox color='primary' value='Ali' onChange={(e) => { getValue(e) }} />
            <Checkbox
                color='primary'
                value='Hmm'
                indeterminate
                onChange={(e) => { getValue(e) }}

            />
            <Checkbox
                color='secondary'
                value='Hmm'

                onChange={(e) => { getValue(e) }}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
            />
        </div>
    );
}

export default CheckBox;

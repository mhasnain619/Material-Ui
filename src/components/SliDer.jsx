import { Slider as MuiSlider } from '@mui/material';

const SliderComponent = () => {
    const marks = [
        {
            value: 0,
            label: 'Start'
        },
        {
            value: 100,
            label: 'Middle'
        },
        {
            value: 200,
            label: 'End'
        }
    ]
    return (
        <div className='App'>
            <h1>React Material UI | Slider</h1>
            <div style={{ width: 300, margin: 40 }}>
                <MuiSlider
                    color="secondary"
                    defaultValue={100}
                    valueLabelDisplay='auto'
                    step={10}
                    max={200}
                    marks={marks}
                />
            </div>
        </div>
    );
};

export default SliderComponent;

// role: Getting the value from app to initialize 
// then inform the app by changing the state to re-render the page by 
// different theme as requested (dark or light)


// ui elements
import Button from '@mui/material/Button';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';

export default function ToggelTheme({value, setValue, colorTheme}) {
  return (
        <Button
        onClick={() => setValue(!value)}
        variant="outlined"
         sx={{
            minWidth: 0,    
            width: 30,
            height: 30,
            padding: 0,
            borderRadius: "50%",
            backgroundColor: "#B55638",
            color: colorTheme,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
        {value ? 
        <BedtimeIcon
        sx={{
            width: "18px", 
        }}/> 
        : <BrightnessHighIcon
        sx={{
            width: "18px", 
        }}/>}
        </Button>

  );
}
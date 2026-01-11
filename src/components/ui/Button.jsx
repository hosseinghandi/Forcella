
// *role: on request make button as desgined *

// material ui componenet
import Button from '@mui/material/Button';
// react imports
import { useNavigate } from 'react-router-dom';

export default function ToggleTheme({type, title, to, color, disabled, shrink}) {
    const navigate  = useNavigate()
  return (
        <Button
        type={type}
        onClick={
            () => to && navigate (to)}
        variant="contained"
        disabled= {disabled}
        sx={{
            fontSize : "1rem",
            textTransform :"capitalize",
            border:"none",
            outline:"none",
            width: shrink ? "fit-content" : "100%",
            height : shrink ? "fit-content" : "40px",
            borderRadius : "25px",
            backgroundColor:"#B55638" ,
            color: color,
            ...(shrink && {padding : "1px 10px"})
        }}
        >
        {title}
        </Button>

  );
}
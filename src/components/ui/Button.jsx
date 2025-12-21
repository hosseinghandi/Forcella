import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function ToggleTheme({type, title, to, color, disable}) {
    const navigate  = useNavigate()
  return (
        <Button
        type={type}
        className='w-11/12 h-[40px]'
        onClick={
            () => to && navigate (to)}
        variant="outlined"
        disabled= {disable}
        sx={{
            width: "100%",
            height : "40px",
            borderRadius : "25px",
            backgroundColor:"#B55638" ,
            color: color
        }}
        >
        {title}
        </Button>

  );
}
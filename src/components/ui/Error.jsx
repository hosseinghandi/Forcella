import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import  Typography  from '@mui/material/Typography';
export default function Error({message}) {
    return(
        message !== "" &&
        <div className='flex flex-row gap-2'>
            <ErrorOutlineIcon 
            sx={
                {color: "var(--red)"}
            }/>
            <Typography variant='textNormal' sx={{color: "var(--red)"}}>{message}</Typography>
        </div>
    )
}
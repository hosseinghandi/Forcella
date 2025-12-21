import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
export default function Error({message}) {
    return(
        <div className='flex flex-row gap-2'>
            <ErrorOutlineIcon 
            sx={
                {color: "var(--red)"}
            }/>
            <p className='text-[var(--red)]'>{message}</p>
        </div>
    )
}
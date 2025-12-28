import Logo from "./logo"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

export default function SharedNavigation({mode, backTo}) {
    const navigate = useNavigate()

    return (
        <div className="w-full flex flex-row justify-end">
            <div className="
            w-half flex flex-row 
            justify-between items-end gap-5">
                <ArrowBackIcon 
                onClick={
                    () => 
                        navigate(backTo)
                }
                />
                <Logo color={mode ? "#000000" : "#FFFFFF"} />
            </div>
        </div>
    )
}
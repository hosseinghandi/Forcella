import Logo from "./logo"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import Filter from "./Filter";
export default function SharedNavigation({mode, backTo, distance, filter}) {
    const navigate = useNavigate()

    return (
        <div 
        className="w-full flex flex-col justify-end">
            <div 
            className="
            flex flex-row 
            justify-between items-end gap-5"
            style={{width : distance ? "100%" : "50%" }}>
                <ArrowBackIcon 
                onClick={
                    () => 
                        navigate(backTo)
                }
                />
                <Logo color={mode ? "#000000" : "#FFFFFF"} />
            </div>
                {filter && <div>
                    <Filter/>
                </div>}
        </div>
    )
}
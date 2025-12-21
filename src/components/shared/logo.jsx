import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import { siteContext } from '../../App';
import { useContext } from 'react';
export default function Logo() {
    const {colorTheme} = useContext(siteContext)
    return  (
            <div className="flex flex-row">
                <span className="
                text-logo-small 
                md:text-logo-large"
                >FORCELLA</span>
                <LocalPizzaIcon 
                sx={{ color : colorTheme}} />
            </div>
    )
}


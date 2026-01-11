// role: embrace the site context, implement global paddong 
// and take care of theme mode as well  

// material ui components
import {Container,Box} from '@mui/material';
// react imports
import { useContext } from 'react';
import { siteContext } from '../../App';

export default function SiteWrapper({children}) {
    const {mode} = useContext(siteContext)
    return ( 
        <Container maxWidth={false} disableGutters>
            <Box
            component="main"
            sx={{
                py: "var(--spacing-global-padding-y-mobile)",
                px: "var(--spacing-global-padding-x-mobile)",
                fontFamily: "Inter, sans-serif",
                backgroundColor: mode ? "#ffffff" : "#000000",
                color: mode ? "#000000" : "#ffffff",
                minHeight: "100vh",
            }}
            >
            {children}
            </Box>
        </Container>
    )
}

// why paddings are like this?


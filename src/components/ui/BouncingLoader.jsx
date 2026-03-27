// role: provide the loading dots on the page
import * as MUI from "../../barrels/MUI"
export default function BouncingLoader(){
    return (
        // bouncer wrapper
        <MUI.Box 
        role="status"
        aria-label="loading"
        aria-live="polite"
        sx={{
            display: "flex",justifyContent:"center", alignItems:"center", 
             "@keyframes bouncing-loader": {
                        to : {
                            transform : "translateY(-10px)"
                        }
                    }  
        }}>
            
        {Array.from({length:3}, (_,index) => index).map( (i) => (
                <MUI.Box 
                aria-hidden="true" 
                key={i}
                sx={{
                    width:"calc(var(--iconsize)/1.5)",
                    height:"calc(var(--iconsize)/1.5)",
                    margin:"0px 10px",
                    borderRadius:"50%",
                    backgroundColor:"var(--orange)",
                    opacity:1,
                    animation:"bouncing-loader 0.6s infinite alternate",
                    animationDelay: `${i * 0.2}s`
                    }
                }>
                </MUI.Box>
            ) )}
        </MUI.Box>
    )
}
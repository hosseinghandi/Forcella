// role: getting initial value to render the text and change that
// if the user requested (black or white) 

export default function Container({children}) {
    return ( 
        <div className={`py-global-padding-y-mobile 
        px-global-padding-x-mobile`} >
            {children}
        </div>
    )
}
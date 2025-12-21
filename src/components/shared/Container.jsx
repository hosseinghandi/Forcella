// role: getting initial value to render the text and change that
// if the user requested (black or white) 

export default function Container({children}) {
    return ( 
        <div className={`pt-[15px] px-[30px] h-screen border-1`} >
            {children}
        </div>
    )
}
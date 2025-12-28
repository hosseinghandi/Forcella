// elements
import pizzaSlice from "../../assets/pizza-image/margherita.png";

export default function Header({children, position}) {

    const positionValue = !position ? 
    {left: "-110px", top: "-25px", position : "absolute"} : 
    {left: "-110px", top: "-220px", position : "absolute"}  
    
    return(
    <header 
    style={{
        height : position ? "15vh" : "42vh" 
    }}
    className=" w-full ">
                {/* Pizza image */}
                <img
                style={positionValue}
                src={pizzaSlice}
                alt="Margherita pizza"
                className={`
                    absolute
                    left-[-110px]
                    transition-transform
                    duration-700
                    ease-in-out
                    h-[42vh]
                    md:h-[50vh]
                    ${
                        position 
                        ? "-translate-y-[20px]"
                        : "-translate-y-[25px]"
                    }
                    `}

                />
                {/* Logo + language */}
                <div className="absolute top-4 right-4 flex flex-col items-end gap-2">
                {children}
                </div>
            </header>
    )
}



// elements
import pizzaSlice from "../../assets/pizza-image/margherita.png";

export default function Header({children}) {
    return(
    <header className=" w-full h-[42vh] ">
                {/* Pizza image */}
                <img
                src={pizzaSlice}
                alt="Margherita pizza"
                className="absolute -left-25 -top-5 
                h-[42vh] 
                md:h-[50vh]
                md:-left-40 md:-top-10 
                "
                />
                {/* Logo + language */}
                <div className="absolute top-4 right-4 flex flex-col items-end gap-2">
                {children}
                </div>
            </header>
    )
}



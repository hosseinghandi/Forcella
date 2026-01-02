import { useState , useContext} from "react"
import { siteContext } from "../../App";


export default function BubbleToggel({dataList, colorTheme}) {
    const [index, setIndex] = useState(0)
    const BubbleList = () => dataList.map( (el, i) => (
            <button 
            key={i}
            onClick={() => setIndex(i)}
            role="button"
            className="
                    hover:cursor-pointer 
                    rounded-full"
                style={{
                    backgroundColor: index === i ? colorTheme 
                    : "#B55638",
                    width : index === i ? "20px" : "14px",
                    height : index === i ? "20px" : "14px"
                }}
                ></button>)
            )

    return (
         <>  
            <div className="mt-[10px]">
            <p className="min-h-[80px] text-normal">{dataList[index]}</p>   
            <div className="flex flex-row gap-4 w-full items-center 
            justify-center mt-[24px]">
                {BubbleList()}
            </div>          
            </div>        
         </>
    )
}

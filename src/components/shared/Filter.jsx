import FilterAltIcon from '@mui/icons-material/FilterAlt';
import CloseIcon from '@mui/icons-material/Close';
import Button from '../ui/Button';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Filter() {
    const {t} = useTranslation()
    const message = {
      search : t("metadata.pizza.searchPizza"), 
      categories : t("metadata.pizza.categories", {returnObjects: true}) 
    }
    
    const categoriesBtn = () => message.categories.map( cat => {
      return (<Button 
              shrink={true}
              type="submit"
              title={cat}
              to={`/applayout/menu/${cat}`}
              color={"white"}
              disabled={false}/>) 
    })

    const [filter, setFilter] = useState(false)
    return (
    <div className="mt-[20px] flex flex-col w-full bg-[var(--gray)] rounded-[25px]">
      <div
        className=" h-[40px] 
        flex items-center px-3
        focus-within:border-[var(--color-orange)]">

        {filter ? 
        <div className='flex flex-row w-full gap-2'>
              {categoriesBtn()}
            </div> 
            : <input
          placeholder={`${message.search}`}  
          className="w-[90%] focus:outline-none"
        />}


        <div 
        onClick={() => setFilter(!filter)}
        className="w-[10%] flex justify-center ">
          {filter ? <CloseIcon/> : <FilterAltIcon /> }
        </div>
      </div>
    </div>
  );
} 

                



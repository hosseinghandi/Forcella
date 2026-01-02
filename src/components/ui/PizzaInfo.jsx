import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from "@mui/material/CardMedia";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from "@mui/material/IconButton";



import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WhatshotSharpIcon from '@mui/icons-material/WhatshotSharp';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

export default function pizzaInfo({pizzaInfo, setInfo}) {
    const { name,
      description,
      ingredients,
      spiceLevel,
      category,
      calories,
      time,
      review, 
      image
      } = pizzaInfo

      console.log(ingredients)
    const ingredientsList = (ing) => {
      return ing.map( el => (<img src={`/pizza-gradient/${el}.png`}/>))
    }

    return (
        <Card 
        sx={    
          {   
            position :"fixed",
            padding: "20px",
            top : "50%",
            left : 0,
            borderRadius: "var(--radius)", 
            border : "1px solid black",
            width : "95%",                
            left : "50%",
            transform : "translate(-50%,-50%)", 
            display:"flex", 
            flexDirection : "column", 
            gap : 2
              }
            }>
        <Box sx={{width : "100%", display: "flex", justifyContent :"end"}}>
            <IconButton 
            id={0}
            sx={{ padding: "0", color: "var(--dark)" }} 
            size="small"> <CloseIcon />
            </IconButton>

        </Box>
        <CardMedia
            component="img"
            alt={`A photo of pizza`}
            image={image}
            sx={{ padding:"0", height: "100%", width: "70%", margin : "auto"}}
        />
        <Box sx={{display : "flex", flexDirection : "column", gap:2}}>
          <Box sx={{backgroundColor: "var(--gray)",borderRadius : "var(--radius)"}}>
            <CardContent > 
                <Typography  sx={{ fontSize: 16 }}>{name}</Typography>
                <Typography  sx={{ fontSize: 15 , textAlign :"justify"}}>
                  {description}
                  </Typography>
                  <Box sx={{display : "flex", flexDirection : "row", justifyContent : "space-between"}}>
                    <Box sx={{display : "flex" , flexDirection : "row", 
                      justifyContent : "center", alignItems :"center", gap : "5px"}}>
                      <AccessTimeIcon sx={{width: "24px"}}/>
                      <Typography  sx={{ fontSize: 15 , textAlign :"justify"}}>
                      {`${time} min`}
                      </Typography>
                    </Box>
                    <Box sx={{display : "flex" , flexDirection : "row", 
                      justifyContent : "center", alignItems :"center", gap : "5px"}}>
                      <LocalFireDepartmentIcon sx={{width: "24px"}}/>
                      <Typography  sx={{ fontSize: 15 , textAlign :"justify"}}>
                      {spiceLevel}
                      </Typography>
                    </Box>
                    <Box sx={{display : "flex" , flexDirection : "row", 
                      justifyContent : "center", alignItems :"center", gap : "5px"}}>
                      <WhatshotSharpIcon sx={{width: "24px"}}/>
                      <Typography  sx={{ fontSize: 15 , textAlign :"justify"}}>
                      {`${calories} Kcl`}
                      </Typography>
                    </Box>
                  </Box>

            </CardContent>
          </Box>
          <Box sx={{backgroundColor: "var(--gray)",borderRadius : "var(--radius)", overflowX : "scroll"}}>
            <CardContent > 
                <Typography  sx={{ fontSize: 18 }}>{`ingredients :`} {ingredientsList(ingredients)}</Typography>

            </CardContent>
          </Box>
        </Box>

        </Card>
      
        
    )
}



    // "id": "1",
    //   "name": "Margherita",
    //   "description": "Classic pizza with tomato sauce, mozzarella, and fresh basil",
    //   "ingredients": ["tomato sauce", "mozzarella", "basil"],
    //   "spiceLevel": "none",
    //   "category": ["special"],
    //   "calories": 250,
    //   "price": 8.99,
    //   "review": 5,
    //   "time": 10,
    //   "image": "/pizza-image/margherita.png",
    //   "offered": {
    //     "active": true,
    //     "percentage": 20
    //   }
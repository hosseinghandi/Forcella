import * as MUI from "../../utils/MUI"
export default function PreparationTime ({totalTimeRequired, totalCount}) {


    return (
        <MUI.Card 
        sx={{
        height: "fit-content",
        borderRadius: "var(--radius)",
        width: "100%",
        backgroundColor: "var(--gray)",
        boxShadow: "none",
        padding: "12px 18px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "10px",
        }}>
            <MUI.Typography >
                Your order will be ready within <MUI.Typography 
                component={"span"}
                variant="pizzaContentBold"
                > {Math.floor(totalTimeRequired)} minutes</MUI.Typography> and <MUI.Typography 
                component={"span"}
                variant="pizzaContentBold"
                > {(totalCount/4) > 0.99 ? 
                    Math.floor(totalCount/4) : 1 } 
                    {` worker${Math.floor(totalCount/4) > 1 ? "s":""}`} 
                </MUI.Typography> will be dedicated to your order.</MUI.Typography>
        </MUI.Card>
    )
}

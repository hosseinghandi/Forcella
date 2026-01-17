import * as MUI from "../../utils/MUI"
export default function PreparationTime ({timeList, count}) {
    
    const timeCal = (time, count) => {
        const totalTimeRequired = time.map( (t,index) => ( t + 
            (count[index] > 1 ? (count[index]/10) : 0)))

        const totalCount = count.reduce((accumulator, currentValue) => 
            accumulator + currentValue , 0)

        return  [Math.floor(Math.max(...totalTimeRequired) + 
                Math.log2( totalCount || 1) * 5), totalCount]
    }
    
    const [time_t, count_t] = timeCal(timeList, count)

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
                > {time_t} minutes</MUI.Typography> and <MUI.Typography 
                component={"span"}
                variant="pizzaContentBold"
                > {Math.floor(count_t/4)} {`worker${Math.floor(count_t/4) > 1 ? "s":""}`} 
                </MUI.Typography> will be dedicated to your order.</MUI.Typography>
        </MUI.Card>
    )
}

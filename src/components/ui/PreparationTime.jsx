import * as MUI from "../../barrels/MUI"
import { Trans } from "react-i18next";
export default function PreparationTime ({totalTimeRequired, totalCount, text}) {
    const minutes = Math.max(1, Math.floor(totalTimeRequired));
    const workers = (totalCount/4) > 0.99 ? Math.floor(totalCount/4) : 1 
    return (
        <MUI.Card 
        sx={{
        height: "100%",
        borderRadius: "var(--radius)",
        width: "100%",
        backgroundColor: "var(--gray)",
        boxShadow: "none",
        padding: "12px 18px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        }}>
            <MUI.Typography variant="textNormal" sx={{lineHeight:1.3}}>
                <Trans
                i18nKey={text.pre_message}
                values={{ minutes, workers }}
                components={{ strong : <MUI.Typography  variant="textNormal" component="span" fontWeight="bold" /> }}
                />
            </MUI.Typography>
        </MUI.Card>
    )
}

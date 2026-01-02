export default function ThemeMode({children, mode}){
    return(
        <main 
        style={{
            fontFamily: "Inter, sans-serif",
            backgroundColor: 
            mode? "white":"black", 
            color: mode ? "#000000" : "#FFFFFF"}}>
                {children}
        </main>
    )
}
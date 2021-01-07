import React , {useState} from 'react'

const App = () => {

    const pink = "#FF69B4";
    const [bg,newBg] = useState(pink);

    const [name,setName] = useState("ClickMe");


    const bgColor = () => {
        let yellow = "#FFA500";
        newBg(yellow)
        setName("Ouchh!! 😠You Hit Me 😏 Now Double Click Me")
    };

    const bgBack = () => {
        let color = "#15c7b0"
        newBg(color)
        setName("Hey Preeties 👸 !!")
    };

    return (
        <>
            <div style = {{backgroundColor : bg }} > 
                <button onClick = {bgColor} onDoubleClick = {bgBack}> {name} </button>
            </div>
        </>
    );
}

export default App


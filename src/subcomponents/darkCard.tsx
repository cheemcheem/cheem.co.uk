import React from "react";

type DarkCardProps = {
    headerTitle: string,
    headerSubtitle: string,
    footer: any,
    link: string
}

//<DarkCard headerTitle={"GitHub"} headerSubtitle={"rubiks-cube-solver"} footer={"React/BabylonJS/TypeScript"} link={"https://github.com/cheemcheem/rubiks-cube-solver"}/>
function DarkCard(props: DarkCardProps) {
    return <div>
        <div className={"card onclick"} onClick={() => window.location.href = props.link}>
            <div className={"card-deck flex"}>
                <div className={"card-deck-horizontal"}>
                    <h1 className={"card-title"}>{props.headerTitle}</h1>
                    <h2 className={"card-subtitle"}>{props.headerSubtitle}</h2>
                </div>
                <div>
                    <h3 className={"card-subtitle"}>{props.footer}</h3>
                </div>
            </div>
        </div>
    </div>
}

export default DarkCard;
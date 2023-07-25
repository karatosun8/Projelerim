import React from "react"
import Angular from "./images/angular.png"
import Bootstrap  from "./images/bootstrap.jpg"
import C from "./images/c++.png"
import Developer  from "./images/developer.png"
import Java  from "./images/java.png"
import Js  from "./images/js.png"
import Php  from "./images/php.jpg"

const resimMap ={
    Angular,
    Bootstrap,
    Developer,
    Js,
    C,
    Java,
    Php
}

function Resim ( {resimName}) {
    return(
        <div>
        

            <img className=""  width={"250px"} height={"200px"} src={resimMap[resimName]}/>
        </div>
    )
}
export default Resim
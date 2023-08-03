import "./Main.scss"
import {data} from "../../helper/data"
import Card from "./Card"


const Main =()=>{
    console.log(data)
    return(
        <div className="card-container">
        {data.map((item) => {
            const { id, title, date, image,desc } = item
             return <Card key={id} title={title} image={image} date={date} desc={desc} />
          })}
          </div>
    )
}
export default Main
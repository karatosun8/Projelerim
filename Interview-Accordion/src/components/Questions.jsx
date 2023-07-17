import data from "../helper/data"
import InterviewAccord from "./InterviewAccord";

const Questions =()=>{
console.log(data);
return (
    <div className="card-container">
      {data.map((item) => (
        <InterviewAccord key={item.id} {...item} />
      ))}
    </div>
  );
}
export default Questions;
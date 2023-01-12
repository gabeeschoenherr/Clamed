import SummaryCard from "./summarycard";

function Summary(){

    return(
        <div id="cardquant">
            <SummaryCard title={"Total"} count={0}/>
            <SummaryCard title={"FrontEnd"} count={2}/>
            <SummaryCard title={"BackEnd"} count={5}/>
            <SummaryCard title={"FullStack"} count={0}/>
            <SummaryCard title={"SoftSkill"} count={1}/>
        </div>
        )

}
export default Summary;
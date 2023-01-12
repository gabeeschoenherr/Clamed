function SummaryCard({title, count}){

    return(
            <div>{title}
                <p id="total">{count}</p>
            </div>
      
        )

}

export default SummaryCard;
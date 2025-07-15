export default function CountriesCard({item}){

    // console.log("re-render")
    console.log(item)
    return (<div className="countryCard" style={{margin:"6px",alignContent:"center", border:"1px auto solid gray", borderRadius:"5px",textAlign:"center", padding:"2px",width: "150px"}} >
        <img style={{maxWidth:"80px",maxHeight:"80px"}}src={item.png}></img>
        <p >        {item.common} </p>
        </div>);
}
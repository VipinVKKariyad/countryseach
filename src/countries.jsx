import { useEffect, useState } from 'react'
import CountriesCard from './ContriesCard';






function Countries() {
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [filter, setFilter] = useState("")
useEffect((

 
)=>{ fetch("https://countries-search-data-prod-812920491762.asia-south1.run.app/countries")
  .then(res=>res.json())
  .then(data=>
    {
    setCountries(data)
    setFilteredCountries(data);
    //  console.log(countries,filteredCountries)
    })
},
[]);
  


useEffect(()=>{
  console.log("filterchanged",filter)
   const FilteredCountries = countries.filter((item)=> item.common.toLowerCase().includes(filter.toLowerCase()))
  // console.log(countries)
  setFilteredCountries(FilteredCountries)

},[filter])



const handleOnchange=(e)=>{
  (setFilter(e.target.value)

)}


  return (
    <>
      <div style={{display:"flex" , justifyContent:"center",alignItems:"center", flexDirection:"column"}}>
      <h1> Countries</h1>
       <input type='text' placeholder="Search for countries..."
 onChange={(e) => handleOnchange(e)} style={{maxWidth:"400px" , width:"100%"}}/>
      <div style={{display:"flex", flexWrap:"wrap", margin:"10px"}}>

    {filteredCountries.map((item, index) => (
          <CountriesCard item={item} key={index}/>
        ))}
</div>
      </div>
    </>
  )
}

export default Countries

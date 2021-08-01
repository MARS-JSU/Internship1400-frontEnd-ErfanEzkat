import React from 'react'
import { connect } from 'react-redux'
import Cards from '../Components/Cards/Cards'
const Home = (props) => {
    let alert=<h2 style={{textAlign:'center',textTransform:'uppercase'}}>no ture avaiable</h2>
    if(props.cards.length>0){
        alert=null;
    }
    return (
        <main>
            {alert}
            <Cards items={props.cards}/>
        </main>
    )
}
const mapStateToProps=state=>{

    return {
        cards:state.Cards
    }
}
export default connect(mapStateToProps,null)(Home)

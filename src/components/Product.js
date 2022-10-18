import React from 'react'
import { CoffeRoutes } from '../App'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Product() {


const { productData } = useSelector(state=>state.data)

    return (
        <div>
          <h1>{productData.title}</h1>
          <h3>{productData.id}</h3>

            <br></br><Link to={CoffeRoutes.home}>home</Link>
            <br></br><Link to={CoffeRoutes.page1}>Page1</Link>
            <br></br><Link to={CoffeRoutes.page2}>Page2</Link>
            <br></br><Link to={CoffeRoutes.page3}>Page3</Link>
        </div>
    )
}
export default Product
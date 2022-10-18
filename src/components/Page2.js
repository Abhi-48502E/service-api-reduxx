import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { CoffeRoutes } from '../App'

function Page2() {
    const { page2Data } = useSelector(state => state.data)


    return (
        <div><h1>Page2</h1>
            {
                <h1>{page2Data.title}</h1>
            }
            <br /><Link to={CoffeRoutes.home}>home</Link>
            <br /><Link to={CoffeRoutes.page1}>Page1</Link>
            <br /><Link to={CoffeRoutes.page2}>Page2</Link>
            <br /><Link to={CoffeRoutes.page3}>Page3</Link>

        </div>
    )
}

export default Page2
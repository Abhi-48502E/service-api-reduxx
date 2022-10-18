import React  from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { CoffeRoutes } from '../App'

function Page3() {
  const { page3Data, page1Data } = useSelector(state => state.data)


  return (
    <div><h1>Page3</h1>
    {
                <h1>{page3Data.title}</h1>
            }
            {
              <h4>{page1Data.title}</h4>
            }
        <br /><Link to={CoffeRoutes.home}>home</Link>
        <br /><Link to={CoffeRoutes.page1}>Page1</Link>
        <br /><Link to={CoffeRoutes.page2}>Page2</Link>
        <br /><Link to={CoffeRoutes.page3}>Page3</Link>
    </div>
  )
}

export default Page3
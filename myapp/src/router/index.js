import { createBrowserRouter } from'react-router-dom';
import Home from '../pages/Home'
import Week12 from '../pages/Week12'
import Week13 from '../pages/Week13'
import Week14 from '../pages/Week14'
import Week15 from '../pages/Week15'
import Add from '../pages/Add'
import Add1 from '../pages/Add1'
const router=createBrowserRouter([
    {
       path:'/',

       element:<Home/>
    },
    {
       path:'/week12',
       element:
      <Week12/>
   
    },
    {
       path:'/week13',
       element:
       
       <Week13/>
       },
       {
        path:'/week14',
        element:
        <Week14/>
       }
       ,
       {
        path:'/week15',
        element:
        <Week15/>
       },
       {
         path:'/add',
         element:
         <Add/>
       },
       {
         path:'/add1',
         element:
         <Add1/>
       }
    ]
    
)
export default router;
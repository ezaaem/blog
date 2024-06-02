 
  import { dummyData } from '../../public/dummyData.js';
 import AllBlogs from '../components/AllBlogs.jsx';
function App() {

 return (
   <>
   
    <AllBlogs blogs={dummyData} />
    </>
 )
}

export default App

import LeftsideBar from "./Component/LeftsideBar"
import Main from "./Component/Main"
import RightsideBar from "./Component/RightsideBar"


const App = () => {
  return (
    <div className="flex m-auto bg-white w-[1440px] border-2 justify-between">
      <LeftsideBar/>
    <Main/> 
    <RightsideBar/>

    </div>
  )
}

export default App;
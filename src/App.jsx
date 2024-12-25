import LeftsideBar from "./Component/LeftsideBar"
import Main from "./Component/Main"
import RightsideBar from "./Component/RightsideBar"


const App = () => {
  return (
    <div className="flex m-auto  bg-[#F0F0F6] w-[1440px] justify-between">
      <LeftsideBar/>
    <Main/> 
    <RightsideBar/>

    </div>
  )
}

export default App;
import logo from "./logo.svg";
import "./styles.scss";
import Navigation from "./Component/Header/Navbar";
import Gallery from "./Component/DummyPage/Gallery";
import { Routes, Route } from "react-router-dom";
// import EnterApi from "./Component/App/EnterApi";
// import ZoomieCircle from "./Component/App/Zoom/Enterzoom";
// import RedsApp from "./Component/Redusere/Passproexam/Apindex";
// import RedApp2 from "./Component/Redusere/PassProp/Redapp2";
import InputPort from "./Component/FunctionRed/InputPort";
function App() {
  return (
    <div className="container">
      <div className="header">
        <Navigation />
      </div>

      {/* <div className="height-100"> */}
      <div className="mainbody">
      <Routes>
        <Route exact path="/" element={<Gallery />} />
        {/* <Route exact path="/about" element={<EnterApi />} />
         <Route path="/images" element={<ZoomieCircle />} /> */}
         {/* <Route path="/ex" element ={<RedApp2 />} /> */}
         <Route path="/svgimg"element={<InputPort/>}/>
         {/* <Route path="/svgcanvas" element={<SVGCS/>}/>
         <Route path="/svgcd" element={<MySvgCD/>}/>
         <Route path="/cwrapper" element={<D3Chart/>}/>
         <Route path="/app2" element={<EnterApi/>}/>
         <Route path="/ex" element={<Maincall />}/> */}
      
      </Routes>
      {/* </div> */}
      </div>
      <div className="footer">Footer</div>
    </div>
  );
}

export default App;

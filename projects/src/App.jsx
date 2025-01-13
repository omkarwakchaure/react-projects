import Accordian from "./components/accordian/Accordian";
import ImageSlider from "./components/image-slider/ImageSlider";
import LoadMoreData from "./components/load-more-data/LoadMoreData";
import RandomColor from "./components/random-color/RandomColor";
import StarRating from "./components/star-rating/StarRating";
import TreeView from "./components/tree-view/TreeView";
import menus from "./components/tree-view/data";
import QrCode from "./components/qr-code-generator/qrCode.jsx";
function App() {
  return (
    <>
      {/* Accordian Component */}
      {/* <Accordian/> */}

      {/* RandomColor Component */}
      {/* <RandomColor/> */}

      {/* Star Rating Components */}
      {/* <StarRating/> */}

      {/* Image Slider Components */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"} /> */}

      {/* load-data Components */}
      {/* <LoadMoreData /> */}

      {/* Tree-view component */}
      {/* <TreeView menus={menus} /> */}

      {/* Qrcode components */}
      <QrCode />
    </>
  );
}

export default App;

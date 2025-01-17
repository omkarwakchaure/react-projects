import Accordian from "./components/accordian/Accordian";
import ImageSlider from "./components/image-slider/ImageSlider";
import LoadMoreData from "./components/load-more-data/LoadMoreData";
import RandomColor from "./components/random-color/RandomColor";
import StarRating from "./components/star-rating/StarRating";
import TreeView from "./components/tree-view/TreeView";
import menus from "./components/tree-view/data";
import QrCode from "./components/qr-code-generator/qrCode.jsx";
import LightDarkMode from "./components/light-dark-mode/LightDarkMode.jsx";
import ScrollBar from "./components/scroll-indicator/ScrollBar.jsx";
import TabTest from "./components/custom-tabs/TabTest.jsx";
import ModalTest from "./components/custom-modal-popup/ModalTest.jsx";
import Github from "./components/github-profile-finder/Github.jsx";
import SearchAuto from "./components/search-autocomplete/SearchAuto.jsx";
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
      {/* <QrCode /> */}

      {/* theme components */}
      {/* <LightDarkMode /> */}

      {/* Scrollbar components */}
      {/* <ScrollBar url={`https://dummyjson.com/products?limit=100`} /> */}

      {/* Custom Tabs Components */}
      {/* <TabTest/> */}

      {/* Custom Modal Popup Components */}
      {/* <ModalTest /> */}

      {/* Github Profile Finder Components */}
      {/* <Github /> */}

      {/* Search Autocomplete Components */}
      <SearchAuto/>
    </>
  );
}

export default App;

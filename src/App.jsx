import { CustomButton } from "./components/Button/button.jsx";
import {
  MainHeading,
  SecondaryHeading,
} from "./components/Heading/headings.jsx";
import { CustomImage } from "./components/Images/image.jsx";
import CustomList, { CustomOrderedList } from "./components/List/list.jsx";

const App = () => {
  return (
    <>
      <MainHeading />
      <SecondaryHeading />
      <CustomList />
      <CustomOrderedList />
      <CustomImage />
      <CustomButton />
    </>
  );
};

export default App;

import { CustomButton } from "./components/Button/button.jsx";
import {
  MainHeading,
  SecondaryHeading,
} from "./components/Heading/headings.jsx";
import { CustomImage } from "./components/Images/image.jsx";
import CustomList, { CustomOrderedList } from "./components/List/list.jsx";
import { recepieData } from "./Data/recepie.js";

const App = () => {
  return (
    <>
      {recepieData.map((eachRecepie) => {
        return (
          <div key={eachRecepie.id}>
            <MainHeading heading={eachRecepie.name}> how are you? </MainHeading>
            <CustomImage source={eachRecepie.image} width={300} />
            <SecondaryHeading heading={"ingredients required "}>
              <strong>I am above the secondary text</strong>
            </SecondaryHeading>
            <CustomList list={eachRecepie.ingredients} />
            <SecondaryHeading heading={"instructions to prepare "} />
            <CustomList list={eachRecepie.instructions} />
          </div>
        );
      })}
    </>
  );
};

export default App;

// ______________________________________________________________________________________

// /** custom image array in props class*/
// const imageListing = [
//   {
//     id: 1,
//     name: "bag1",
//     src: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     width: 200,
//     height: 200,
//   },
//   {
//     id: 2,
//     name: "bag2",
//     src: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     width: 400,
//     height: 400,
//   },
// ];

{
  /**
   * {/* <MainHeading />
      <SecondaryHeading />
      <CustomList />
      <CustomOrderedList /> */
}
{
  /* <CustomButton /> */
}

{
  /**
   * custom image in props class
   */
}

//  {imageListing.map((eachImage) => {
//   return (
//     <CustomImage
//       source={eachImage.src}
//       width={eachImage.width}
//       height={eachImage.height}
//     />
//   );
// })}
// <CustomButton text="login" onPress={() => {}} bgColor="red" />
// <CustomButton text="sign in" onPress={() => {}} bgColor="green" />

{
  /*

       *end of custom image in props class

      */
}

{
  /* * creationof card  */
}

// <MainHeading heading="list of Fruits" />
// <CustomList list={["WaterMelon", "Banana", "Apple"]} />
// <MainHeading heading="list of cricketers" />
// <CustomList list={["Kohli", "Dhoni", "Sachin"]} />
// <MainHeading heading="list of vegetables" />
// <CustomList list={["Carrot", "Radish", "Brinjal"]} />

{
  /*

       * end of card creation creationof card

       */
}

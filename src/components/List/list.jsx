const CustomList = () => {
  return (
    <ul>
      <ListItems />
    </ul>
  );
};

export default CustomList;

export const CustomOrderedList = () => {
  return (
    <ol>
      <ListItems />
    </ol>
  );
};

export const ListItems = () => {
  const listItems = ["Apple", "Banana", "Kiwi", "Mango", "Orange"];
  return (
    <>
      {listItems.map((eachFruit) => {
        return <li>{eachFruit}</li>;
      })}
    </>
  );
};

const CustomList = (props) => {
  const { list } = props;
  return (
    <ul>
      {list.map((eachFruit, index) => {
        return (
          <div key={index}>
            <li>{eachFruit}</li>
          </div>
        );
      })}
    </ul>
  );
};

export default CustomList;

export const CustomOrderedList = () => {
  const { list } = props;
  return (
    <ol>
      {list.map((eachFruit, index) => {
        return (
          <div key={index}>
            <li>{eachFruit}</li>
          </div>
        );
      })}
    </ol>
  );
};

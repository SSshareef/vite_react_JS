export const CustomButton = (props) => {
  const { text = "button", onPress = () => {}, bgColor = "yellow" } = props;
  return (
    <button style={{ background: bgColor }} onClick={onPress}>
      {text}
    </button>
  );
};

export const CustomImage = (props) => {
  const { source, height, width, alternateText } = props;
  return <img src={source} height={height} width={width} alt={alternateText} />;
};

export const MainHeading = (props) => {
  const { heading, children } = props;
  return (
    <div>
      <h1>{children}</h1>
      <h1>{heading}</h1>
    </div>
  );
};

export const SecondaryHeading = (prop) => {
  const { heading, children } = prop;

  return (
    <div>
      {children}
      <h2>{heading}</h2>
    </div>
  );
};

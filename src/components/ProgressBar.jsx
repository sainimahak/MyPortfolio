const ProgressBar = ({ bgcolor, progress, height, width }) => {
  const Parentdiv = {
    height,
    width,
    backgroundColor: 'gray',
    borderRadius: 40,
  };

  const Childdiv = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: 'right',
  };

  const progresstext = {
    padding: 10,
    color: 'black',
    fontWeight: 900,
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv} />
    </div>
  );
};

export default ProgressBar;

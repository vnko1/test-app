const App = ({ children, onClick }) => {
  // const onClick = () => console.log("click");
  return (
    <>
      <p>Hello world!</p>
      <p>Hello world!</p>
      <button onClick={onClick}>Click on me</button>
    </>
  );
};

export default App;


const link = { name: "Google", url: "https://www.google.com/" };
const colors = ["Червоний", "Синій", "Зелений"];
function App() {
  let firstNumber = 5;
  let secondNumber = 67;
  return (
    <>
      <h1>Illia</h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img src="https://images.alphacoders.com/137/1379590.png" alt="AOT" />
      <a href={link.url}>Google</a>
      <p>{firstNumber + secondNumber}</p>
      <ul>
        {colors.map((color) => (
          <li>
            <p>{color}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;


function App() {
  return (
    <div>
      <h1 style={{ color: 'red' }}>Main Title</h1>
      <p>
        A text with one section highlighted in <span style={{ color: 'blue' }}>blue</span>{' '}
        and another section of the color <span style={{ backgroundColor: 'yellow' }}>yellow</span>.
      </p>
      <h2 style={{ fontStyle: 'italic' }}>Smaller Title</h2>
      <ul>
        <li>List item 1</li>
        <li>
          List item 2
          <ol style={{ fontSize: '0.8em' }}>
            <li>Nested item 1</li>
            <li>Nested item 2</li>
            <li>Nested item 3</li>
          </ol>
        </li>
        <li>List item 3</li>
      </ul>
      <img src="https://via.placeholder.com/600x400" alt="Placeholder" style={{ width: '300px' }} />
    </div>
  );
}

export default App;

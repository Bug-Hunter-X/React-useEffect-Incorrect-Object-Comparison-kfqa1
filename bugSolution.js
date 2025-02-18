```javascript
import isEqual from 'lodash.isequal';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Use a deep comparison library
    if (!isEqual(prevProps.someObject, props.someObject)) {
      // Perform some action
    }
  }, [props.someObject]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
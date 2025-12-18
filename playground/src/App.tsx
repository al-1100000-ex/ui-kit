import Input from "../../src/components/Input.tsx";
import { useState } from "react";

function App() {
  const [val, setVal] = useState('');

  return (
    <div>
      <Input
        name={'input'}
        label={'test'}
        onChange={(_key, value) => setVal(value)}
        value={val}
      />
    </div>
  )
}

export default App;
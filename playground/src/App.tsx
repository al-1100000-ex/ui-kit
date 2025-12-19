import { Input } from "../../src";
import { useState } from "react";

function App() {
  const [value, setValue] = useState('');

  return (
    <div>
      <Input
        label={'test'}
        name={'test'}
        onChange={(_key, value) => setValue(value)}
        value={value}
      />
    </div>
  )
}

export default App;
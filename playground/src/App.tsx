import { Button, Input } from "../../src";
import { useState } from "react";

function App() {
  const [test, setTest] = useState('')

  return (
    <div style={{margin: 20}}>
      {/*<Tile*/}
      {/*  header={"Test"}*/}
      {/*  link={'https://alexhinterleitner.com/'}*/}
      {/*  image={'https://alexhinterleitner.com/homepage/src/Base/Media/Images/covers_cover.png'}*/}
      {/*/>*/}
      <Button label={'primary'}  onClick={() => alert('clicked')} />
      <Button label={'secondary'} type={'secondary'}  onClick={() => alert('clicked')} />
      <Button label={'tertiary'} type={'tertiary'}  onClick={() => alert('clicked')} />
      <Button label={'blue'} type={'blue'}  onClick={() => alert('clicked')} />
      <Button label={'danger'} type={'danger'}  onClick={() => alert('clicked')} />
      <Button label={'disabled'} disabled onClick={() => alert('clicked')} />
      <hr/>
      <Input name={'test'} label={'test'} type={'password'} value={test} onChange={(_key:string, value:string) => setTest(value)} />

    </div>
  )
}

export default App;
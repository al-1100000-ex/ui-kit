import { Button } from "../../src/components/Button/Button.tsx";

function App() {
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
    </div>
  )
}

export default App;
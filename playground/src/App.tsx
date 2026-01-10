import Button from "../../src/components/Button/Button.tsx";

function App() {
  return (
    <div style={{margin: 20}}>
      {/*<Tile*/}
      {/*  header={"Test"}*/}
      {/*  link={'https://alexhinterleitner.com/'}*/}
      {/*  image={'https://alexhinterleitner.com/homepage/src/Base/Media/Images/covers_cover.png'}*/}
      {/*/>*/}
      <Button label={'test'} onClick={() => alert('clicked')} />
    </div>
  )
}

export default App;
import { Button } from "../../src/components/Button/Button.tsx";
import { IconText } from "../../src";
import { ShoppingCart } from "./base/icons/ShoppingCart.tsx";

function App() {
  return (
    <div style={{margin: 20}}>
      {/*<Tile*/}
      {/*  header={"Test"}*/}
      {/*  link={'https://alexhinterleitner.com/'}*/}
      {/*  image={'https://alexhinterleitner.com/homepage/src/Base/Media/Images/covers_cover.png'}*/}
      {/*/>*/}
      <Button label={<IconText icon={<ShoppingCart />} text={'Add to cart'} />} onClick={() => alert('clicked')} />
    </div>
  )
}

export default App;
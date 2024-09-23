
import './App.css'
import { RandomNumber } from './assets/\'RandomNumber.tsx'
import { ComponentWithProps } from './assets/ComponentWithProps.tsx'
import { Head } from './assets/Headerfirst.tsx'
import { HeaderSecond } from './assets/HeaderSecond.tsx'
import { ParagraphLorem } from './assets/ParagraphLorem.tsx'
import { ParagraphWithStyle1 } from './assets/ParagraphWithLocalStyle.tsx'
import { ParagraphWithStyle } from './assets/ParagraphWithStyle.tsx'
function App() {


  return (
    <>
      <Head></Head>
      <HeaderSecond></HeaderSecond>
      <ParagraphLorem></ParagraphLorem>
      <RandomNumber></RandomNumber>
      <RandomNumber></RandomNumber>
      <RandomNumber></RandomNumber>
      <ParagraphWithStyle></ParagraphWithStyle>
      <ParagraphWithStyle1></ParagraphWithStyle1>
      <ComponentWithProps személynév='Gábor' telefon='+3666666' email='munka@gmail.com' ></ComponentWithProps>
    </>
  )
}

export default App

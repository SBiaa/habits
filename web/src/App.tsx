import { Header } from './components/Header'
import { SumamaryTable } from './components/SummaryTable'
import './styles/global.css'
// import { Habit } from "./components/habit"

export function App() {
  return(

  <div className="w-screen h-screen flex justify-center items-center">
    <div className="w-full max-w-5xl px-6 flex-col gap-16">

    <Header/>
    <SumamaryTable/>
    </div>
  </div>


  )
}



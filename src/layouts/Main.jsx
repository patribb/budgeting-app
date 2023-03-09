import {useLoaderData, Outlet} from 'react-router-dom'
import wave from '../assets/wave.svg'
import { Navbar } from '../components'

const Main = () => {
    const {userName} = useLoaderData()
  return (
    <div className='layout'>
        <Navbar userName={userName} />
        <main>
        <Outlet />
        </main>
        <img src={wave} alt="Wave decoration" />
    </div>
  )
}
export default Main
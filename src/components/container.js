import {useContext} from 'react'
import Button from './Button'
import ThemeContext from '../context/teamcontext' 
import '../App.css'
function container() {
    const {theme}=useContext(ThemeContext);
  return (
  <>
  <div className={`app ${theme==='dark' ? theme:''}`}>
      <Button/></div>
  </>
  )
}

export default container
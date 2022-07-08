import { useContext } from 'react'
import ThemeContext from '../context/teamcontext' //context dahil olmalı hangısını kullancıaksak
function Button() { 
    const {theme,setTheme}=useContext(ThemeContext);  //parametre olarak importladıgımız değişkeni atarız
  return ( 
   <div>
active theme {theme}
<br/>
<button onClick={()=>setTheme(theme==="light" ? "dark" :"light")}>
    cahneg theme
</button>

   </div>
  )
}

export default Button
import React from 'react'

function Inputcl({col , setCol}) {
  return (
   
        <form 
            onSubmit={(e) => {e.preventDefault(); setCol('') ; console.log(col)}}
        >
            <input
                placeholder='enter any color , hex or rgb()'
                value={col}
                onChange={(event) => setCol(event.target.value)}
            >
            </input>
        </form>
  )
}

export default Inputcl

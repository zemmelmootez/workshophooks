import React, { useRef, useState } from 'react'
import GiftItem from './GiftItem'
import AddProduct from './AddProduct'

function GiftList() {

  const [list,setList]=useState([{name:"mongela",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Casio_OCEANUS_OCW-S1350PC-1AJR_01.JPG/220px-Casio_OCEANUS_OCW-S1350PC-1AJR_01.JPG",price:"20"},
            {name:"parfum",img:"https://www.fatales.tn/96551-large_default/hugo-boss-the-scent-le-parfum-pour-femme-eau-de-parfum.jpg",price:"30"}
    ])

  const [filtredGift,setFiltred]=useState(list)
  const R5=useRef()
  const filterGifts=()=>{
    const filtredList=list.filter(e=>e.name.toUpperCase().includes(R5.current.value.toUpperCase()))
    setFiltred(filtredList)
  }
  return (
  <div style={{display:"flex",alignItems:"center",flexDirection:"column",padding:"2vw",gap:"40px"}}>
    <h3>My Gift Store</h3>
    <input ref={R5} type='text' placeholder='search for a product' onChange={filterGifts}></input>
    <div style={{display:"flex" ,gap:"20px"}}>
      {filtredGift.map(e=><GiftItem item={e}></GiftItem>)}
      <AddProduct list={list} setList={setList}></AddProduct>
    </div>

    </div>
  )
}

export default GiftList

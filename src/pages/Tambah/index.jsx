
import Input from '../../components/Input';
import './index.scss';
import { store } from '../../Service/api';
// import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';


const initialValue = {
  
  name: '',
  price: '',
  stock: '',
  status: '',
  // image: ''
}
const Tambah = () => {
  const [datas, setDatas]= useState(initialValue);
  const { name, price, stock, status, } = datas;
  // let history = useHistory();

  const onValueChange = (e) => {
      console.log(e.target.value);
      setDatas({...datas, [e.target.name]: e.target.value})
  }

  const storeDetails = async() => {
      await store();
  }
  return (
    <div className="main">
      <div className="card">
        <h2>Tambah Produk</h2>
        
        <br />
        <form>
          <Input onChange={(e) => onValueChange(e)} name='name' value={name} type="text" placeholder="Nama Produk..." label="Nama"/>
          <Input onChange={(e) => onValueChange(e)} name='price' value={price} type="number" placeholder="Harga Produk..." label="Price"/>
          <Input onChange={(e) => onValueChange(e)} name='stock' value={stock}  type="number" placeholder="Stock Produk..." label="Stock"/>
          <Input onChange={(e) => onValueChange(e)} name='status' value={status}  type="text" placeholder="status Produk..." label="status"/>
          {/* <Input onChange={(e) => onValueChange(e)} name='status' value={status} type="checkbox" label="Active" checked/> */}

          <button onClick={() => storeDetails()} type="submit" className="btn btn-primary">Simpan</button>
        </form>
      </div>
    </div>
  )
}

export default Tambah;
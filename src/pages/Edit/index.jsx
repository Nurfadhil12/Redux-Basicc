import { useState, useEffect } from 'react';
import { useParams } from "react-router";
import Input from "../../components/Input";
import { update, index } from '../../Service/api';

// const initialValue = {
//   name:'',
//   price:'',
//   stock:'',
//   status:'',
// }



const Edit = () => {
  // const [datas, setDatas] = useState(initialValue);
  // const { name, price,stock,status} = datas;
  // const { id } = useParams();

  // // useEffect(() => {
  // //   loadUserDetails();
  // // }, []);

  // // const loadUserDetails = async() => {
  // //     const response = await index(id);
  // //     setDatas(response.data);
  // // }

  // const editUserDetails = async() => {
  //     const response = await update(id);
  // }

  // const onValueChange = (e) => {
  //     console.log(e.target.value);
  //     setDatas({...datas, [e.target.name]: e.target.value})
  // }

  return (
    <div className="main">
      <div className="card">
        <h2>Edit Produk</h2>
        <br />
        {/* <form>
          <Input onChange={(e) => onValueChange(e)} name="name" type="text" placeholder="Nama Produk..." label="Nama" value={name}/>
          <Input onChange={(e) => onValueChange(e)} name="price" type="number" placeholder="Harga Produk..." label="Harga" value={price}/>
          <Input onChange={(e) => onValueChange(e)} name="stock" type="number" placeholder="Stock Produk..." label="Stock" value={stock}/>
          <Input name="status" type="checkbox" label="Active" checked/>
          <button type="submit" onClick={() => editUserDetails()} className="btn btn-primary">Simpan</button>
        </form> */}
      </div>
    </div>
  )
}

export default Edit;
import { Link } from 'react-router-dom';
import './index.scss';
import { destroy, index } from '../../Service/api';
import React, { useState,useEffect } from "react";
import { Table, TableHead, TableCell, TableRow, TableBody, makeStyles } from '@material-ui/core';
import Swal from 'sweetalert2';


const useStyles = makeStyles({
  table: {
      width: '90%',
      margin: '50px 0 0 50px'
  },
  thead: {
      '& > *': {
          fontSize: 20,
          background: '#000000',
          color: '#FFFFFF'
      }
  },
  row: {
      '& > *': {
          fontSize: 18
      }
  }
})

const Home = () => {
    const [datas, setDatas] = useState([]);
    // const [search, setSearch] = useState("how");
    const classes = useStyles();
  
  
    
  useEffect(() => {
      getAllindex();
  }, []);

  const deleteData = async (id) => {
      await destroy(id);
      getAllindex();
      
  }

  const getAllindex = async () => {
      let response = await index();
      setDatas(response.data);
  }
  return(
    <div className="main">
      <Link to="/tambah" className="btn btn-primary">Tamah Produk</Link>
      <div className="search">
        <input type="text" placeholder="Masukan kata kunci..."/>
      </div>
      <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Stock</TableCell>
                    <TableCell>Status</TableCell>
                    {/* <TableCell>Image</TableCell> */}
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {datas.map((data) => (
                    <TableRow className={classes.row} key={data.id}>
                        <TableCell>{data._id}</TableCell> 
                        <TableCell>{data.name}</TableCell>
                        <TableCell>{data.price}</TableCell>
                        <TableCell>{data.stock}</TableCell>
                        <TableCell>{data.status}</TableCell>
                        {/* <TableCell>{data.image_url}</TableCell> */}
                        <TableCell>
                            <Link to="/detail" className="btn btn-sm btn-info">Detail</Link>
                            <Link to="/edit" to={`/edit/${data._id}`} className="btn btn-sm btn-warning">Edit</Link>
                            <Link to="#" onClick={() => deleteData(data._id)} className="btn btn-sm btn-danger">Delete</Link>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
  )
}

export default Home;


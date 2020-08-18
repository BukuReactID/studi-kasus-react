import * as React from 'react'; 
import { LayoutOne, Text, Table, Button } from 'upkit';
import { Link } from 'react-router-dom';

import TopBar from '../../components/TopBar';
import { useAddressData } from '../../hooks/address';


const columns = [
  {Header: 'Nama', accessor: 'nama'},   
  {Header: 'Detail', accessor: alamat => {
    return <div>
      {alamat.provinsi}, {alamat.kabupaten}, {alamat.kecamatan}, {alamat.kelurahan} <br/>
      {alamat.detail}
    </div>
  }}
]

export default function UserAddress(){

  let { 
    data, 
    limit, 
    page, 
    status, 
    count, 
    setPage
  } = useAddressData();

  return (
     <LayoutOne size="large">
       <div>
         <TopBar/>
         <Text as="h3"> Alamat pengiriman </Text>
         <br />

           <div>
             <Link to="alamat-pengiriman/tambah">
               <Button>
                 Tambah baru
               </Button>
             </Link>
             <br />
             <br />
             <Table 
               items={data}
               columns={columns}
               totalItems={count}
               page={page}
               perPage={limit}
               isLoading={status === 'process'}
               onPageChange={page => setPage(page)}
             />
           </div>

         {status === 'success' && !data.length ? <div className="text-center p-10">
           Kamu belum menambahkan alamat pengiriman. <br/>
           <Link to="/alamat-pengiriman/tambah">
             <Button> Tambah Baru </Button>
           </Link>
         </div> : null}

       </div>
     </LayoutOne>
   )
}

import * as React from 'react'; 
import FaHome from '@meronex/icons/fa/FaHome'; 
import FaAddressBook from '@meronex/icons/fa/FaAddressBook';
import FaArrowRight from '@meronex/icons/fa/FaArrowRight';
import FaFileInvoice from '@meronex/icons/fa/FaFileInvoice';
import { LayoutOne, Text, Card, Responsive } from 'upkit'; 
import { Link } from 'react-router-dom';

import TopBar from '../../components/TopBar';

const IconWrapper = ({children}) => {
  return <div className="text-white text-5xl flex justify-center mb-5">
      {children}
  </div>
}

const menus = [
  {label: 'Beranda', icon: <IconWrapper><FaHome/></IconWrapper>, url: '/'},
  {label: 'Alamat', icon: <IconWrapper><FaAddressBook/></IconWrapper>, url: '/alamat-pengiriman'}, 
  {label: 'Pesanan', icon: <IconWrapper><FaFileInvoice/></IconWrapper>, url: '/pesanan'}, 
  {label: 'Logout', icon: <IconWrapper><FaArrowRight/></IconWrapper>, url: '/logout'}
];


export default function UserAccount(){
  return (
    <LayoutOne>
      <TopBar/> 
      <Text as="h3"> Akun Anda </Text> 
      <br/>
			<Responsive desktop={4} tablet={4} mobile={2}>
			 {menus.map((menu, index) => {
				 return <div key={index} className="px-2 pb-2">
					 <Link to={menu.url}>
						 <Card
							 header={menu.icon}
							 body={<div className="text-center font-bold text-white">
								 {menu.label}
							 </div>}
						 />
					 </Link>
				 </div>
			 })}
		 </Responsive>
    </LayoutOne>
  )
}

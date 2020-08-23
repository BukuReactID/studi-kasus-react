import * as React from 'react'; 
import { Badge } from 'upkit';
import { string } from 'prop-types';

export default function StatusLabel({status}){
  switch(status){
    case 'waiting_payment':
      return <Badge color="orange">
        Menunggu pembayaran
      </Badge>

    case 'paid':
      return <Badge color="green">
        Sudah dibayar
      </Badge>

    case 'processing':
      return <Badge color="yellow">
        Sedang diproses
      </Badge>

    case 'in_delivery':
      return <Badge color="blue">
        Dalam pengiriman
      </Badge>

    case 'delivered':
      return <Badge color="green">
        Pesanan diterima
      </Badge>

    default:
      return <div/>
  }
}

StatusLabel.defaultProps = {
   
}

StatusLabel.propTypes = {
  status: string.isRequired
}

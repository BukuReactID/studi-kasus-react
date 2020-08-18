import * as React from 'react'; 
import { arrayOf, string, shape, oneOfType, number, func } from 'prop-types';
import {
  CardItem, 
	Button,
	Text,
} from 'upkit';
import FaArrowRight from '@meronex/icons/fa/FaArrowRight'
import FaCartPlus from '@meronex/icons/fa/FaCartPlus';

import { config } from '../../config';
import { sumPrice } from '../../utils/sum-price';
import { formatRupiah } from '../../utils/format-rupiah';


export default function Cart({items, onItemInc, onItemDec, onCheckout}){
 
	  let total = sumPrice(items);
	 
   return (
     <div>

			<div className="px-2 border-b mt-5 pb-5">
				<div className="text-3xl flex items-center text-red-700">
					<FaCartPlus/>
					<div className="ml-2">
						Keranjang 
					</div>
				</div>

				<Text as="h5"> Total: {formatRupiah(total)} </Text>

				<Button
					text="Checkout" 
					fitContainer 
					iconAfter={<FaArrowRight/>}
					disabled={!items.length}
					onClick={onCheckout}
				/>
			</div>

			{!items.length ? <div className="text-center text-sm text-red-900"> belum ada items di keranjang </div> : null}

			<div className="p-2">
				{items.map((item, index) => {
					return <div key={index} className="mb-2">
						<CardItem 
							imgUrl={`${config.api_host}/upload/${item.image_url}`}
							name={item.name}
							qty={item.qty}
							color="orange"
							onInc={_ => onItemInc(item)}
							onDec={_ => onItemDec(item)}
						/>
					</div>
				})}
			</div>

     </div>
   )
}

Cart.propTypes = {
  items: arrayOf(shape({
	    _id: string.isRequired,
	    name: string.isRequired, 
	    qty: oneOfType([string, number]).isRequired, 
	  })),
  onItemInc: func, 
  onItemDec: func,
	onCheckout: func,
}

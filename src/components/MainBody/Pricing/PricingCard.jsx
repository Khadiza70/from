import React from 'react'
import pricingData from '../../mock-data/pricing-card-data'
import EnterPriceCard from './EnterPriceCard'
import FreeCard from './FreeCard'
import PricingDetails from './PricingDetails'
import ProCard from './ProCard'

export default function PricingCard() {
	console.log(pricingData);
	return (
		<section className="PricingDetils ">
			<div className="container mt-1">
				<div className="row">
					{
						pricingData.map((item) => {
							<PricingDetails key={item.id} data={item} />
						})
					}
					<FreeCard />
					<ProCard />
					<EnterPriceCard />
				</div>
			</div>
		</section>

	)
}

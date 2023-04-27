import React, { useState } from 'react';
import { GiPerson, GiRank3, GiM3GreaseGun } from 'react-icons/gi'

export default function PlatoonSources({ sources }:any) {

	return (
		<>
			<div className='my-8 flex flex-col gap-2'>
				<h2 className='text-xl'>Sources:</h2>
				<ul role="list" className="gap-4 list-disc">
					{sources.map((item: any) => (
						<li className='font-light text-lg hover:text-white transition ease-linear duration-100'><a href={item.url}>{item.name}</a></li>
					))}
				</ul>
			</div>
		</>
	);
}

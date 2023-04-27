import React, { useState } from 'react';
import ms from 'milsymbol';
import { GiPerson, GiRank3, GiM3GreaseGun } from 'react-icons/gi'

export default function PlatoonStructure({ platoon }:any) {

	var platoonSymbol = new ms.Symbol(
		"SFG-UCI----D",
		{
			colorMode: "Dark"
		}
	).asSVG();

	return (
		<>
			<ul role="list" className="flex flex-col gap-4">
				{platoon.map((item: any) => (
					<li className='text-2xl flex flex-col' key={item.name}>
					{
						item.count > 1 ? item.count + " x " + item.name : item.name
					}
					{item.units.map((unit: any) => (
						unit.type == "team" ?
						(
							[...Array(unit.count)].map(() => (
							unit.units.map((unit: any) => (
							<div className='flex font-light pl-6 hover:text-white transition ease-linear duration-100'>
								<GiPerson className='text-3xl p-1'/>
								<span className='text-xl'>{unit.name}</span>
								<div className='flex pl-3'>
									<GiRank3 className='text-3xl p-1'/><div className='text-base pl-0 p-1'>{unit.rank}</div>
								</div>
								<div className='flex pl-3'>
									<GiM3GreaseGun className='text-3xl p-1'/><div className='text-base pl-0 p-1'>
										{unit.weapons.join(', ')}
									</div>
								</div>
							</div>
						)))))
						:
						<div className='flex font-light hover:text-white transition ease-linear duration-100'>
							<GiPerson className='text-3xl p-1'/>
							<span className='text-xl'>{unit.name}</span>
							<div className='flex pl-3'>
								<GiRank3 className='text-3xl p-1'/><div className='text-base pl-0 p-1'>{unit.rank}</div>
							</div>
							<div className='flex pl-3'>
								<GiM3GreaseGun className='text-3xl p-1'/><div className='text-base pl-0 p-1'>
									{unit.weapons.join(', ')}
								</div>
							</div>
						</div>
					))}
					</li>
				))}
			</ul>
		</>
	);
}

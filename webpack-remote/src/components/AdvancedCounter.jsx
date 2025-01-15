import React, { useState } from "react";
import '../index.scss'

const AdvancedCounter = () => {
	const [val, setVal] = useState(0);
	const [err, setErr] = useState(null);

	return (
		<div className="m-5 px-10 py-5 bg-slate-600 w-96 rounded">
			<h2 className="pb-4 text-2xl text-white">Advanced Counter</h2>
			<div className="inline-flex gap-x-4 items-center">
				<button
					className="bg-red-500 hover:bg-red-700 text-xl text-white font-bold py-2 px-4 rounded"
					onClick={() => {
						if ((val - 1) < 0) {
							setErr("Counter value can't be less than 0");
						} else {
							setVal(val - 1);
						}
					}}
				>-</button>
				<h2 className="text-lg text-white">{val}</h2>
				<button
					className="bg-blue-500 hover:bg-blue-700 text-xl text-white font-bold py-2 px-4 rounded"
					onClick={() => {
						if (err != null) {
							setErr(null);
						}
						setVal(val + 1)
					}}
				>+</button>
			</div>
			{
				err != null && (
					<p className="text-lg pt-5 text-red-300">{err}</p>
				)
			}
		</div>
	)
};

export default AdvancedCounter;

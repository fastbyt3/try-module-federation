import React, { useState } from "react";

const Counter = () => {
	const [val, setVal] = useState(0);

	return (
		<div>
			<h2>Value = {val}</h2>
			<button onClick={() => setVal(val + 1)}>+</button>
		</div>
	)
}

export default Counter;

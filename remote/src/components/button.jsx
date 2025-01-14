import { useState } from "react"

export default () => {
	const [val, setVal] = useState(0);

	return (
		<div className="button-container">
			<button
				className="button-container__cta"
				onClick={() => setVal(val + 1)}
			>
				VAL = {val}
			</button>
		</div>
	)
}

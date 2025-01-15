import React from "react";

const Counter = React.lazy(() => import("remoteFoo/Counter"));

const App = () => {
	return (
		<React.StrictMode>
			<h1>Main website</h1>
			<React.Suspense fallback={<p>Loading...</p>}>
				<Counter />
			</React.Suspense>
		</React.StrictMode>
	);
};

export default App;

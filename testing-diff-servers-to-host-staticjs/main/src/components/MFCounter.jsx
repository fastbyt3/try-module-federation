import React, { Suspense } from "react";
import { importRemote } from "../utils/importRemote";

const CounterFromRemote = React.lazy(() => importRemote({
	url: "http://localhost:9999/1.1.0",
	scope: "remote",
	module: "Counter",
	remoteEntryFileName: "remoteEntry.js",
}));

export default () => (
	<Suspense fallback={<p>Loading..</p>}>
		<CounterFromRemote />
	</Suspense>
);

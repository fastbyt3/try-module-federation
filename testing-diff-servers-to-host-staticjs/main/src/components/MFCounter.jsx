import React, { Suspense } from "react";
import { importRemote } from "../utils/importRemote";

const CounterFromRemote = React.lazy(() => importRemote({
	url: "http://localhost:9999",
	scope: "remote",
	module: "Counter",
	remoteEntryFileName: "remote.js",
}));

export default () => (
	<Suspense fallback={<p>Loading..</p>}>
		<CounterFromRemote />
	</Suspense>
);

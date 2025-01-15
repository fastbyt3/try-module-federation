import React from "react";
import FederatedWrapper from "./FederatedWrapper";

const FederatedComponent = (Component) => ({ error, delayed, ...props }) => (
	<FederatedWrapper>
		<Component {...props} />
	</FederatedWrapper>
);

export default FederatedComponent;

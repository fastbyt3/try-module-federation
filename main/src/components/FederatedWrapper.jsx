import React from "react";

class FederatedWrapper extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false,
		};
	}

	static getDerivedStateFromError(_error) {
		return {
			hasError: true,
		};
	}

	componentDidCatch(err, _errInfo) {
		console.log(err);
	}

	render() {
		if (this.state.hasError) {
			return this.props.error || <h1>Oops.. Something went wrong..</h1>
		}

		return (
			<React.Suspense fallback={this.props.delayed || <div />}>
				{this.props.children}
			</React.Suspense>
		)
	}
}

export default FederatedWrapper

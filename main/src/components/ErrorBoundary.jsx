import React from "react";

class ErrorBoundary extends React.Component {
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
			return <h1>Oops.. Something went wrong..</h1>
		}

		return this.props.children;
	}
}

export default ErrorBoundary;

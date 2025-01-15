import React from 'react';
import './App.css'
import Button from 'remote/button'

import ErrorBoundary from './components/ErrorBoundary';
import FederatedWrapper from './components/FederatedWrapper';
import FederatedComponent from './components/FederatedComponent';

const AdvancedCounter = FederatedComponent(React.lazy(() => import("webpackRemote/AdvancedCounter")));

function App() {
	return (
		<ErrorBoundary>
			<FederatedWrapper>
				<Button />
			</FederatedWrapper>
			<AdvancedCounter />
		</ErrorBoundary>
	)
}

export default App

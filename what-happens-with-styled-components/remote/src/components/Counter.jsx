import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	align-items: center;
`

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #BF4F74;
  background-color: #BF4F74;
  font-size: 1.5rem;
  color: #FFF;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const ErrorMessage = styled.h2`
	color: #BF4F74;
	margin-left: 1.5rem;
	font-size: 1rem;
`

const Counter = () => {
	const [val, setVal] = useState(0);
	const [err, setErr] = useState(null);

	return (
		<>
			<Container>
				<Button onClick={() => {
					if ((val - 1) < 0) {
						setErr("Counter value can't be less than 0");
					} else {
						setVal(val - 1);
					}
				}}>-</Button>
				<h2>{val}</h2>
				<Button onClick={() => {
					if (err) {
						setErr(null);
					}
					setVal(val + 1);
				}}>+</Button>
			</Container>
			{
				err != null && (
					<ErrorMessage>{err}</ErrorMessage>
				)
			}
		</>
	)
};

export default Counter;

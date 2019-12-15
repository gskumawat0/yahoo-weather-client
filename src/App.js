import React, { useState, useEffect } from 'react';
import './App.css';
import { apiCall } from './utils/api';
import { Footer, Navbar, Spinner, ErrorDisplay } from './components/Layout';
import { Form, Container, Card } from 'react-bootstrap';
import cities from './utils/cities';
import { City, Observation, Forecast } from './components/Weather';
const { REACT_APP_API_BASE_URL: baseUrl } = process.env;

function App() {
	const [city, setCity] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const [weatherData, setData] = useState({});

	useEffect(() => {
		if (!city) {
			return setCity('');
		}
		let url = `${baseUrl}/info`;
		setLoading(true);
		apiCall('post', url, { city })
			.then(data => {
				setData(data.data);
				setLoading(false);
			})
			.catch(err => {
				setLoading(false);
				setError(err.message);
				setTimeout(() => {
					setError('');
				}, 5000);
			});
	}, [city]);

	const handleChange = e => {
		let { value } = e.target;
		if (city && city === value) {
			setCity('');
			setData({});
		} else {
			setCity(value);
		}
	};

	return (
		<div className="App">
			<Navbar />
			{loading ? <Spinner /> : null}
			{error ? <ErrorDisplay error={error} /> : null}
			<Container>
				<div className="text-left border-bottom py-2">
					<p className="d-inline">Select a city: </p>
					<Form.Group id="formGridCheckbox" className="d-inline">
						{cities.map(({ value, label }) => (
							<Form.Check
								key={value}
								type="checkbox"
								label={label}
								value={value}
								onChange={handleChange}
								checked={city === value}
								className="checkbox"
							/>
						))}
					</Form.Group>
				</div>
				<Card className="my-2 bg-light">
					<Card.Body>
						{city && Object.keys(weatherData).length ? (
							<div>
								<City data={weatherData.location} />
								<hr />
								<Observation data={weatherData.current_observation} />
								<hr />
								<Forecast data={weatherData.forecasts} />
							</div>
						) : (
							<div className="text-danger">{!city ? 'Please Select a City' : 'No data available'}</div>
						)}
					</Card.Body>
				</Card>
			</Container>
			<Footer />
		</div>
	);
}

export default App;

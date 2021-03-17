import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import SettingsComponent from './components/SettingsComponent/SettingsComponent'


function App() {
	return (
		<BrowserRouter>
			<div className="app_wrapper">
				<Header />
				<Navbar />
				<div className="content_wrapper">
					<Route path="/profile" component={Profile} />
					<Route path="/dialogs" component={Dialogs} />
					<Route path="/news" component={News} />
					<Route path="/settings" component={SettingsComponent} />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App

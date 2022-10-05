import { Route, Switch, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// Components
import MainPage from './components/MainPage';
import AboutPage from './components/AboutPage';
import Web3Page from './components/Web3Page';
import Web2Page from './components/Web2Page';
import MySkillsPage from './components/MySkillsPage';
import SoundBar from './subcomponents/SoundBar';

// css
import GlobalStyle from './globalStyles';
import { lightTheme } from './components/Themes';
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';

function App() {
	const location = useLocation();

	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={lightTheme}>
				<SoundBar />
				{/* page change animation */}
				<AnimateSharedLayout type='crossfade'>
					<AnimatePresence exitBeforeEnter>
						<Switch location={location} key={location.pathname}>
							<Route exact path='/' component={MainPage} />
							<Route exact path='/about' component={AboutPage} />
							<Route exact path='/web3' component={Web3Page} />
							<Route exact path='/web2' component={Web2Page} />
							<Route exact path='/skills' component={MySkillsPage} />
						</Switch>
					</AnimatePresence>
				</AnimateSharedLayout>
			</ThemeProvider>
		</>
	);
}

export default App;

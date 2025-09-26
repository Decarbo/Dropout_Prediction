import './App.css';
import Features from './components/Features';
import Footer from './components/Footer';
import ForStudents from './components/ForStudents';
import ForTeachers from './components/ForTeachers';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import InteractiveImage from './components/InteractiveImage';
import NotificationsPreview from './components/NotificationsPreview';
import Roadmap from './components/Roadmap';

function App() {
	return (
		<div>
			<Hero />
			<HowItWorks/>
			<Roadmap/>
			<ForTeachers/>
			<ForStudents/>
			<NotificationsPreview/>
			<Features/>
			<Footer/>
		</div>
	);
}

export default App;

import './App.css';
import AssignmentsGuides from './components/Assignments&Guides';
import Features from './components/Features';
import Footer from './components/Footer';
import ForStudents from './components/ForStudents';
import ForTeachers from './components/ForTeachers';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import InteractiveImage from './components/InteractiveImage';
import Navbar from './components/Navbar';
import NotificationsPreview from './components/NotificationsPreview';
import Roadmap from './components/Roadmap';
import StudentResources from './components/StudentResources';
import StudyMaterials from './components/StudyMaterials';
import VideoLectures from './components/VideoLectures';

function App() {
	return (
		<div>
			<Navbar/>
			<Hero />
			{/* <Roadmap/> */}
			<ForTeachers/>
			<ForStudents/>
			<StudentResources/>
			<StudyMaterials/>
			<VideoLectures/>
			<AssignmentsGuides/>
			<HowItWorks/>
			<NotificationsPreview/>
			<Features/>
			<Footer/>
		</div>
	);
}

export default App;

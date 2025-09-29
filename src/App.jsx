import { Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import ForTeachers from "./components/ForTeachers";
import ForStudents from "./components/ForStudents";
import StudentResources from "./components/StudentResources";
import StudyMaterials from "./components/StudyMaterials";
import VideoLectures from "./components/VideoLectures";
import AssignmentsGuides from "./components/Assignments&Guides";
import HowItWorks from "./components/HowItWorks";
import NotificationsPreview from "./components/NotificationsPreview";
import Features from "./components/Features";
import Roadmap from "./components/Roadmap";
import LoginPage from "./components/LoginPage";
import Layout from "./components/Layout";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				{/* Home Page */}
				<Route index element={<Hero />} />

				<Route path="teachers" element={<ForTeachers />} />
				<Route path="students" element={<ForStudents />} />
				<Route path="resources" element={<StudentResources />} />
				<Route path="materials" element={<StudyMaterials />} />
				<Route path="lectures" element={<VideoLectures />} />
				<Route path="assignments" element={<AssignmentsGuides />} />
				<Route path="how-it-works" element={<HowItWorks />} />
				<Route path="notifications" element={<NotificationsPreview />} />
				<Route path="features" element={<Features />} />
				<Route path="roadmap" element={<Roadmap />} />
				<Route path="login" element={<LoginPage />} />

				<Route path="*" element={<h1>404 - Page Not Found</h1>} />
			</Route>
		</Routes>
	);
}

export default App;

import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ImagesCarousel from '../../components/ImagesCarousel';
import StepByStepAdoption from '../../components/StepByStepAdoption';
import CardCategory from '../../components/CardCategory';
import MatchsMainContent from '../../components/MatchsMainContent';
import PeopleReview from '../../components/Section/PeopleReview';
import CardPostsContainer from '../../components/Card-Posts-Container';

const Home = () => {
	return (
		<>
			<Header />
			<ImagesCarousel />
			<CardCategory />
			<StepByStepAdoption />
			<MatchsMainContent />
			<PeopleReview />
			<CardPostsContainer />
			<Footer />
		</>
	);
};

export default Home;

import Banner from '../../components/Banner/banner';
import Feature from '../../components/Features/feature';
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';
import features from '../../data/features.json';

function Home() {
	return (
		<main>
			<Header />
			<Banner />
			<article className='features'>
				{features.map((feature) => {
					return (
						<Feature
							key={feature.title}
							id={feature.id}
							title={feature.title}
							text={feature.text}
						/>
					);
				})}
			</article>
			<Footer />
		</main>
	);
}

export default Home;
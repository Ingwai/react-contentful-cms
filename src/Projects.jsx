import useFetchProjects from './fetchProjects';

const Projects = () => {
	const { loading, projects } = useFetchProjects();

	const handleProjects = url => {};

	return (
		<section className='projects'>
			<div className='title'>
				<h2>projects</h2>
				<div className='title-underline'></div>
			</div>
			<div className='projects-center'>
				{projects.map(project => {
					const { title, url, id, img } = project;
					return (
						<a className='project' href={url} key={id} target='_blank' rel='noreferrer'>
							<img src={img} alt='' className='img' />
							<h5>{title}</h5>
						</a>
					);
				})}
			</div>
		</section>
	);
};

export default Projects;

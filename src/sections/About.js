import React from 'react'

const people = [
    {
        name:'Musk',
        position:'dział 1',
        classes:'about-employee-pic-one',
        description:`Treść 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Morbi vel massa et lacus egestas cursus a non magna. Fusce
            scelerisque blandit nunc, id malesuada ex lobortis a.
            Integer felis nisi, tempor elementum lorem in, varius
            pellentesque ligula. Duis efficitur lacinia enim, non
            tincidunt libero ultrices in.`
    },
    {
        name:'Gates',
        position:'dział 2',
        classes:'about-employee-pic-two',
        description:`Treść 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Morbi vel massa et lacus egestas cursus a non magna. Fusce
            scelerisque blandit nunc, id malesuada ex lobortis a.
            Integer felis nisi, tempor elementum lorem in, varius
            pellentesque ligula. Duis efficitur lacinia enim, non
            tincidunt libero ultrices in.`
    }
]


const Person = (props) => {
    const {name, position, classes, description} = props
	return (
		<div className='about-employee'>
			<div className={classes} />
			<div>
				<h3>{name} ({position})</h3>
				<p>
					{description}
				</p>
			</div>
		</div>
	)
}

const About = () => {
	return (
		<section id='about'>
			<div className='container'>
                <h1>Nasi specjaliści</h1>
                {people.map((element, key) => {
                   return (<Person key={key} 
                        name={element.name}
                        position={element.position}
                        classes={element.classes}
                        description={element.description}
                    /> )
                })}
			</div>
		</section>
	)
}



export default About

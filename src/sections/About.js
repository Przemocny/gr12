import React from 'react'
import {withRouter, Redirect} from 'react-router-dom'

const people = [
    {
        name:'Musk',
        position:'dział 1',
        img: 'https://specials-images.forbesimg.com/imageserve/5d8bd74018444200084e889c/416x416.jpg?background=000000&cropX1=1339&cropX2=3743&cropY1=554&cropY2=2956',
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
        img: 'https://specials-images.forbesimg.com/imageserve/5c76b4b84bbe6f24ad99c370/416x416.jpg?background=000000&cropX1=0&cropX2=4000&cropY1=0&cropY2=4000',
        description:`Treść 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Morbi vel massa et lacus egestas cursus a non magna. Fusce
            scelerisque blandit nunc, id malesuada ex lobortis a.
            Integer felis nisi, tempor elementum lorem in, varius
            pellentesque ligula. Duis efficitur lacinia enim, non
            tincidunt libero ultrices in.`
    },
    {
        name:'Gates',
        position:'dział 2',
        img: 'https://specials-images.forbesimg.com/imageserve/5c76b4b84bbe6f24ad99c370/416x416.jpg?background=000000&cropX1=0&cropX2=4000&cropY1=0&cropY2=4000',
        description:`Treść 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Morbi vel massa et lacus egestas cursus a non magna. Fusce
            scelerisque blandit nunc, id malesuada ex lobortis a.
            Integer felis nisi, tempor elementum lorem in, varius
            pellentesque ligula. Duis efficitur lacinia enim, non
            tincidunt libero ultrices in.`
    },
    {
        name:'Gates',
        position:'dział 2',
        img: 'https://specials-images.forbesimg.com/imageserve/5c76b4b84bbe6f24ad99c370/416x416.jpg?background=000000&cropX1=0&cropX2=4000&cropY1=0&cropY2=4000',
        description:`Treść 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Morbi vel massa et lacus egestas cursus a non magna. Fusce
            scelerisque blandit nunc, id malesuada ex lobortis a.
            Integer felis nisi, tempor elementum lorem in, varius
            pellentesque ligula. Duis efficitur lacinia enim, non
            tincidunt libero ultrices in.`
    },
    {
        name:'Gates',
        position:'dział 2',
        img: 'https://specials-images.forbesimg.com/imageserve/5c76b4b84bbe6f24ad99c370/416x416.jpg?background=000000&cropX1=0&cropX2=4000&cropY1=0&cropY2=4000',
        description:`Treść 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Morbi vel massa et lacus egestas cursus a non magna. Fusce
            scelerisque blandit nunc, id malesuada ex lobortis a.
            Integer felis nisi, tempor elementum lorem in, varius
            pellentesque ligula. Duis efficitur lacinia enim, non
            tincidunt libero ultrices in.`
    }
]




const Person = ({name, position, img, description, index}) => {
    const active = index % 3 == 0
 
	return (
		<div className={['about-employee', active ? 'active' : 'not-active'].join(' ')}>
            <div className='about-img'>
                <img src={img} alt="opis zdjecia"/>
            </div>
			<div className='about-desc'>
				<h3>{index}{String(active)}{name} ({position})</h3>
				<p>
					{description}
				</p>
			</div>
		</div>
	)
}

const About = withRouter((props) => {

    const { limit=3 } = props
    const { id } = props.match.params
    
    if(Number.isNaN(Number(id)) === false){
        if(Number(id) >= 0){
            console.log('ID dobrze', id, Number(id))
        }
        else{
            return (<Redirect to="/about/1"/>)
        }
    }
    else{
        return (<Redirect to="/about/1"/>)
    }

    const limitedPeople = people.filter((element, key)=>{
        return key <= limit - 1
    })

	return (
		<section id='about'>
			<div className='container'>
                <h1>Nasi specjaliści</h1>
                {limitedPeople.map((element, key) => {
                   return (<Person key={key} 
                        index={key}
                        name={element.name}
                        position={element.position}
                        img={element.img}
                        description={element.description}
                    /> )
                })}
			</div>
		</section>
	)
})



export default About

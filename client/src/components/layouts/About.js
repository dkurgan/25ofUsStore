import React from 'react';

class About extends React.Component{
    render(){
        return(
        <div className="container text-center layouts">
            <h3>About</h3>
            <p><em>25ofus это Маленький проект</em></p>
            <p>Тута описание бренда,философии и так далее.Ну типо почему каки-то лошки должны нам занести шекели</p>
            <br/>
                <div className="row">
                    <div className="col-sm-6">
                        <a href="https://instagram.com/25_of_us"><i className="fab fa-instagram fa-2x"></i></a>
                    </div>
                <div className="col-sm-6">
                    <a href="https://vk.com"><i className="fab fa-vk fa-2x"></i></a>
                </div>
                </div>
        </div>
        )
    }
}

export default About
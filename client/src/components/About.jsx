import React from 'react';

class About extends React.Component{
    render(){
        return (
            <div>
        <div style={{marginTop: 50}} className="fonts-body">
                <h3 className="ui center aligned header">About</h3> 
                <div style={{margin: 20}} className="ui center aligned grid">
            <p><em>25ofus это Маленький проект</em></p>
                    <p>Тута описание бренда,философии и так далее.
                Ну типо почему каки-то лошки должны нам занести шекели</p>
                    </div>
                </div>
                <div className="ui center aligned grid">
                <div className="row social-links">
                    <div className="col-sm-6">
                        <a style={{color: '#4183c4'}} href="https://instagram.com/25_of_us"><i className="fab fa-instagram fa-2x"></i></a>
                    </div>
                <div className="col-sm-6">
                    <a href="https://vk.com"><i className="fab fa-vk fa-2x"></i></a>
                </div>
                    </div>
                    </div>
        </div>
        )
    }
}

export default About
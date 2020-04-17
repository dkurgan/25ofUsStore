import React from 'react';

class Delivery extends React.Component{
    render(){
        return (
            <div>
            <div style={{marginTop: 50}} className="fonts-body">
                <h3 className="ui center aligned header"><i className="fas fa-truck"></i> About Delivery</h3>
                <div style={{margin: 20}} className="ui center aligned grid">
                    <p><em>Кароче</em></p>
                        <p>Вы нам шекели даете, а мы доставляем вам то шляпу которуе вы выбрали.Только в пределах мск, сорян по
                деревням мы не катаемся. Можем в вашу жопу отправить почтой и накладной,ну как договримся вообщем. Тока всегда
                        песо вперед!</p><br />
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
        );
    };
}

export default Delivery
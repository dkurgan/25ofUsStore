import React from 'react';

class Delivery extends React.Component{
    render(){
        return(
            <div id="band" class="container text-center fonts-body">
                <h3><i className="fas fa-truck"></i> About Delivery</h3>
                    <p><em>Кароче</em></p>
                        <p>Вы нам шекели даете, а мы доставляем вам то шляпу которуе вы выбрали.Только в пределах мск, сорян по
                        деревням мы не катаемся. Можем в вашу жопу отправить почтой и накладной,ну как договримся вообщем. Тока всегда
                        песо вперед!</p><br/>
                <div className="row">
                    <div className="col-sm-6">
                    <a href="https://instagram.com/25_of_us"><i className="fab fa-instagram fa-2x"></i></a>
                    </div>
                    <div className="col-sm-6">
                    <a href="https://vk.com"><i className="fab fa-vk fa-2x"></i></a>
                    </div>
                </div>
            </div>
        );
    };
}

export default Delivery
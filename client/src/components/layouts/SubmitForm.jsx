import React from 'react';
import { connect } from 'react-redux';

class SubmitForm extends React.Component{
  formArea = () => {
      return(
        <form className="ui form">
          <h4 class="ui dividing header">Доставка</h4>
        <div className="two fields">
            <div className="field">
              <label>Ваше имя</label>
          <input className="name" placeholder="Имя"  required type="text"/>
          </div>
            <div className="field">
              <label>Ваша Фамилия</label>
          <input placeholder="Фамилия" className="name"required type="text"/>
          </div>
        </div>
          <div className="field">
              <label>Мобильный номер</label>
              <input id="mobForm" placeholder="номер сотки" type="text" />
          </div>
          <div className="field">
          <label>Почтовый индекс</label>
            <input id="postId" placeholder="Индекс" type="text" />
          </div>
          <div className="field">
          <label>Адрес</label>
            <input placeholder="Улица, дом, город" type="text" />
          </div>
          <div className="field"> 
            <label>Коментарий к заказу</label>
            <input placeholder="Не обязательно" type="text" />
          </div>
        </form>
      )
    }
    render() {
      return (
        <div className="ui centered grid">
          {this.formArea()}
          </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps)(SubmitForm)
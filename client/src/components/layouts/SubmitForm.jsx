import React from 'react';
import { connect } from 'react-redux';
import { formErrors } from '../../helpers/formErrors';
import { setAlert } from '../../actions/alert';
import { rightPlaceAlert } from '../../helpers/placeAlert';
import { calculateDelivery } from '../../actions/delivery';

class SubmitForm extends React.Component{
  state = {
      firstName: "",
      secondName: "",
      mobile: "",
      email: "",
      postIndex: "",
      postAdress: "",
      comment: "",
    errors: {
      fName: null,
      sName: null,
      mob: null,
      email: null,
      pIndex: null,
      pAdress: null,
    },
    carier: "Заполните данные",
    checkbox: {
      postal: true,
      carier: false
    },
    btnSubmit: "Оформить" 
  }
  handelSubmit = e => {
    e.preventDefault();
    let err = formErrors(this.state);
    this.setState({ errors: err });
    if (Object.keys(err).length !== 0) { // Object.keys will return an array with all keys
      this.props.setAlert("Проверьте ваши данные", "red", 888);
    }
    else if (Object.keys(err).length === 0 && this.state.checkbox.carier === true) {
      let order = this.state;
      order.total = this.props.total;
      // order.matter = this.props.items.matter;
      // order.warehouse = "Москва, улица Южнобутовская, дом 9"
      this.props.calculateDelivery(order);
      this.props.setAlert('Ваш заказ переден в курьерску службу, менеджер скоро свяжется с вами',
        'green', 888);
    }
    else {
      //add order confirmation
      this.props.setAlert('Ваш заказ отправлен в обработку, менеджер скоро свяжется с вами',
        'green', 888)
    }
  }
  handelDelivery = e => {
    const { postal, carier } = this.state.checkbox;
    this.setState({
      checkbox: { postal: !postal, carier: !carier },
      btnSubmit: "Расчитать доставку"
    });
    if (postal === false)
      this.setState({btnSubmit: "Оформить"})
  }
  formArea = () => {
    const { fName, sName, mob, email, pIndex, pAdress } = this.state.errors;
    let alertPlace = null;
        if (alert.length > 0)
            alertPlace = rightPlaceAlert(alert[0].postId, 999);
    return (
        <form style={{marginTop: 30}} onSubmit={this.handelSubmit} className="ui form">
        <div className="two fields">
            <div className={`field ${fName ? 'error' : null}`}>
              <label>Ваше имя</label>
              <input onChange={(e) => this.setState({firstName: e.target.value} )}
                className="name" placeholder="Имя" type="text" />
          </div>
            <div className={`field ${sName ? 'error' : null}`}>
              <label>Ваша Фамилия</label>
              <input placeholder="Фамилия"
                onChange={(e) => this.setState({secondName: e.target.value} )}
                className="name" type="text" />
          </div>
        </div>
          <div className={`field ${mob ? 'error' : null}`}>
              <label>Мобильный номер</label>
            <input id="mobForm"
              onChange={(e) => this.setState({ mobile: e.target.value })}
              placeholder="номер сотки" type="text" />
          </div>
          <div className={`field ${email ? 'error' : null}`}>
              <label>Электронная почта</label>
            <input id="mobForm"
              onChange={(e) => this.setState({email: e.target.value})}
              placeholder="email" type="email" />
          </div>
          <div className={`field ${pIndex ? 'error' : null}`}>
          <label>Почтовый индекс</label>
            <input id="postId"
              onChange={(e) => this.setState({ postIndex: e.target.value })}
              placeholder="Индекс" type="text" />
          </div>
          <div className={`field ${pAdress ? 'error' : null}`}>
          <label>Адрес</label>
            <input onChange={(e)=>this.setState({postAdress: e.target.value})}
              placeholder="Город, улица, дом" type="text" />
          </div>
          <div className={`field`}> 
            <label>Коментарий к заказу</label>
            <input placeholder="Не обязательно"
              onChange={(e) => this.setState({ comment: e.target.value} )}
              type="text" />
          </div>
          {this.props.alert ? alertPlace : null}
          <div onChange={this.handelDelivery} className="ui form">
            <div className="grouped fields">
              <label>Выберите способ доставки</label>
              <div className="field">
                <div className="ui radio checkbox">
                <input type="radio" name="postal" checked={this.state.checkbox.postal} />
                <label>Почта(~200 рублей)</label>
                </div>
              </div>
                <div className="field">
                  <div  className="ui radio checkbox">
                <input type="radio" name="carier" checked={this.state.checkbox.carier}/>
                    <label>{`Курьером: ${this.state.carier}`}</label>
                  </div>
              </div>
            </div>
            </div>
        <button className="ui primary button" type="submit">{this.state.btnSubmit}</button>
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
      items: state.items,
      alert: state.alert
    }
}

export default connect(mapStateToProps, {setAlert, calculateDelivery})(SubmitForm)
import React from 'react';
import { connect } from 'react-redux';
import { formErrors } from '../../helpers/formErrors';
import { setAlert } from '../../actions/alert';
import { rightPlaceAlert } from '../../helpers/placeAlert';
import { calculateDelivery, sendOrder } from '../../actions/delivery';
import Loader from '../helpers/loader'

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
    // carier: "Заполните данные",
    checkbox: {
      postal: true,
      carier: false
    },
    waiting: false,
    deliveryType: false,
    btnSubmit: "Оформить",
    deliveryCost: this.props.total + 200
  }
  handelSubmit = async e => {
    e.preventDefault();
    let err = formErrors(this.state);
    this.setState({ errors: err });
    let order = this.state;
    if (Object.keys(err).length !== 0) { // Object.keys will return an array with all keys
      this.props.setAlert("Проверьте ваши данные", "red", 888);
      return;
    }
    else if (Object.keys(err).length === 0 && this.state.checkbox.carier === true &&
      this.state.deliveryType === true) {
      order.total = this.props.total;
      order.matter = "Одежда";
      order.warehouse = "Москва, улица Южнобутовская, дом 9";
      order.insurance = this.props.total;
      order.weight = this.props.items.length;
      this.setState({
        btnSubmit: "Оформить",
        waiting: true
      });
      this.props.setAlert('Считаем','green', 888);
      await this.props.calculateDelivery(order);
      this.setState({
        waiting: false,
        deliveryType: false,
        deliveryCost: this.props.total + parseInt(this.props.delivery) 
      });
      return;
    }
    else if (Object.keys(err).length === 0 &&
      (this.state.deliveryType === false || (this.state.checkbox.carier === false && 
        this.state.deliveryType === true))
    ) {
      let delType = "Почта";
      if (this.state.checkbox.carier === true) {
        delType = "Курьер";
      }
      const delivery = {
        delType,
        cost: this.props.delivery
      }
      this.setState({ waiting: true });
      await this.props.sendOrder(
        order,
        this.props.items,
        this.props.newSize,
        delivery
      );
      this.setState({ waiting: false });
      //push user to confirm page
    }
  }
  handelDelivery = e => {
    const { postal, carier, deliveryType } = this.state.checkbox;
    this.setState({
      checkbox: { postal: !postal, carier: !carier },
      deliveryType: !deliveryType,
      btnSubmit: "Расчитать доставку"
    });
    if (postal === false) {
      this.setState({ btnSubmit: "Оформить" })
      this.setState({ deliveryCost: this.props.total + 200 });
    }
  }
  formArea = () => {
    const { fName, sName, mob, email, pIndex, pAdress } = this.state.errors;
    let alertPlace = null;
    if (this.props.alert.length > 0)
      alertPlace = rightPlaceAlert(this.props.alert[0].postId, 888);
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
        {this.state.waiting ? <Loader/> :(<div>
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
                <label>{this.props.delivery.length > 0 ? `Курьером: ${this.props.delivery} рублей` : 
                  `Курьером: Заполните данные`}</label>
                  </div>
              </div>
            </div>
          </div>
                <div className="content">
            <h4> Total: {this.state.deliveryCost} денег</h4>
                </div>
          <button style={{ marginTop: 5 }}
            className="ui primary button" type="submit">{this.state.btnSubmit}</button>
          </div>
        )}
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
      items: state.cart,
      alert: state.alert,
      delivery: state.delivery
    }
}

export default connect(mapStateToProps, {setAlert, calculateDelivery, sendOrder})(SubmitForm)
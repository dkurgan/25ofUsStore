import React from 'react';
import { connect } from 'react-redux';
import { formErrors } from '../../helpers/formErrors';
import Alert from '../Alert';
import { setAlert } from '../../actions/alert';

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
    }
  }
  handelSubmit = e => {
    e.preventDefault();
    let err = formErrors(this.state);
    this.setState({ errors: err });
    console.log(Object.keys(err).length)
    if (Object.keys(err).length != 0) // Object.keys will return an array with all keys
      this.props.setAlert("Проверьте ваши данные", "red");
    else
      this.props.setAlert('Все тути-фрутти', 'green');
  }
  formArea = () => {
    const { fName, sName, mob, email, pIndex, pAdress } = this.state.errors;
      return(
        <form style={{marginTop: 15}} onSubmit={this.handelSubmit} className="ui form">
        <div className="two fields">
            <div className={`field ${fName ? 'error' : null}`}>
              <label>Ваше имя</label>
              <input onChange={(e) => this.setState({ firstName: e.target.value })}
                className="name" placeholder="Имя" type="text" />
          </div>
            <div className={`field ${sName ? 'error' : null}`}>
              <label>Ваша Фамилия</label>
              <input placeholder="Фамилия" onChange={(e)=>this.setState({secondName: e.target.value})}
                className="name" type="text" />
          </div>
        </div>
          <div className={`field ${mob ? 'error' : null}`}>
              <label>Мобильный номер</label>
            <input id="mobForm" onChange={(e)=>this.setState({mobile: e.target.value})}
              placeholder="номер сотки" type="text" />
          </div>
          <div className={`field ${email ? 'error' : null}`}>
              <label>Электронная почта</label>
            <input id="mobForm" onChange={(e)=>this.setState({email: e.target.value})}
              placeholder="email" type="email" />
          </div>
          <div className={`field ${pIndex ? 'error' : null}`}>
          <label>Почтовый индекс</label>
            <input id="postId" onChange={(e)=>this.setState({postIndex: e.target.value})}
              placeholder="Индекс" type="text" />
          </div>
          <div className={`field ${pAdress ? 'error' : null}`}>
          <label>Адрес</label>
            <input onChange={(e)=>this.setState({postAdress: e.target.value})}
              placeholder="Улица, дом, город" type="text" />
          </div>
          <div className={`field`}> 
            <label>Коментарий к заказу</label>
            <input placeholder="Не обязательно"
              onChange={(e) => this.setState({ comment: e.target.value })}
              type="text" />
          </div>
          {this.props.alert ? <Alert /> :
            <h4> Total: {this.props.total} денег</h4>}
          <button className="ui primary button" type="submit">Оформить</button>
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

export default connect(mapStateToProps, {setAlert})(SubmitForm)
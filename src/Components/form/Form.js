import "./Form.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../../store/actions/contacts";

export default function Form() {
  const [state, setState] = useState({
    contact: {
      name: "",
      surname: "",
      phone: "",
    },
    form: false,
  });

  const dispatch = useDispatch();

  function changeHeandler(e) {
    setState({
      ...state,
      contact: { ...state.contact, [e.target.name]: e.target.value },
    });
  }

  function hideForm() {
    setState({ ...state, form: false });
  }

  function showForm() {
    setState({ ...state, form: true });
  }

  function saveContact(e) {
    e.preventDefault();
    dispatch(add(state.contact));
    setState({
      contact: {
        name: "",
        surname: "",
        phone: "",
      },
      form: false,
    });
  }

  return state.form ? (
    <div>
      <div className="new-contact">
        <div className="new-contact-body">
          <div className="new-contact-header">
            <h4>Новий контакт</h4>
          </div>
          <form onSubmit={saveContact}>
            <input
              id="name"
              name="name"
              value={state.contact.name}
              onChange={changeHeandler}
              placeholder="Імʼя"
              required
            />
            <input
              id="surname"
              name="surname"
              value={state.contact.surname}
              onChange={changeHeandler}
              placeholder="Прізвище"
              required
            />
            <input
              id="phone"
              name="phone"
              value={state.contact.phone}
              onChange={changeHeandler}
              placeholder="Номер телефону"
              pattern="\+?[0-9\s\-\(\)]+"
              required
            />
            <button type="submit">ТАК</button>
            <button type="reset" onClick={hideForm}>
              НІ
            </button>
          </form>
        </div>
      </div>
      <button onClick={showForm}>Додати</button>
    </div>
  ) : (
    <button onClick={showForm}>Додати</button>
  );
}

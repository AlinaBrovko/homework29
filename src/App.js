import Contacts from "./Components/contacts/Contacts";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "./store/actions/contacts";
import "./App.css";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, []);
  return (
    <div className="container">
      <h3>Контакти</h3>
      <Contacts />
    </div>
  );
}

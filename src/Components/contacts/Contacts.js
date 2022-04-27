import Item from "./Item";
import Form from "../form/Form";
import { useSelector } from "react-redux";

export default function Contacts() {
  const contacts = useSelector((state) => state.contacts);

  return (
    <div>
      <table className="contacts">
        <tbody>
          {contacts.map((item) => (
            <Item item={item} key={item.id} />
          ))}
        </tbody>
      </table>
      <Form />
    </div>
  );
}

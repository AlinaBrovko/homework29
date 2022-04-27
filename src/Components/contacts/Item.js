import { useDispatch } from "react-redux";
import { remove } from "../../store/actions/contacts";

export default function Item({ item }) {
  const dispatch = useDispatch();

  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.surname}</td>
      <td>{item.phone}</td>
      <td
        className="delete"
        onClick={() => {
          dispatch(remove(item.id));
        }}
      >
        &#10006;
      </td>
    </tr>
  );
}

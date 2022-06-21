import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa";

const ClientInfo = ({ client }) => {
  return (
    <div className="mt-5 mb-3">
      <h4 className="mb-3">Client Info</h4>
      <ul className="list-group">
        <li className="list-group-item">
          <FaUser className="icon" /> {client.name}
        </li>
        <li className="list-group-item">
          <FaEnvelope className="icon" /> {client.email}
        </li>
        <li className="list-group-item">
          <FaPhone className="icon" /> {client.phone}
        </li>
      </ul>
    </div>
  );
};

export default ClientInfo;

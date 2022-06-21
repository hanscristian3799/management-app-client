import { useQuery } from "@apollo/client";
import { GET_CLIENTS } from "../apollo/queries/clientQueries";
import AddClientModal from "./AddClientModal";
import ClientRow from "./ClientRow";
import Spinner from "./Spinner";

const Clients = () => {
  const { error, loading, data } = useQuery(GET_CLIENTS);

  if (error) return <h1>Error</h1>;
  if (loading) return <Spinner />;

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h2>Clients</h2>
        <AddClientModal />
      </div>
      {!loading && !error && (
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client) => {
              return <ClientRow key={client.id} client={client} />;
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Clients;

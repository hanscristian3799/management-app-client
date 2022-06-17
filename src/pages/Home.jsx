import AddClientModal from "../components/AddClientModal";
import AddProjectModal from "../components/AddProjectModal";
import Clients from "../components/Clients";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <>
      <Projects />
      <div className="d-flex gap-3">
        <AddClientModal />
        <AddProjectModal />
      </div>
      <Clients />
    </>
  );
};

export default Home;

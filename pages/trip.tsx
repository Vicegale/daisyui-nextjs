import TripAdvisorSearch from 'components/tripadvisor/TripAdvisorSearch';
import NavBar from '../components/navbar/NavBar';

const Home = () => {
  return (
    <div className="">
      <NavBar />
      <div>
        <TripAdvisorSearch />
      </div>
    </div>
  );
};
export default Home;

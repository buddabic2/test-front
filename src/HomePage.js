import logo from './graphics/restaurant.png';

function HomePage() {
  return (
    <div className="home-page-main-wrapper">
      <h1>Welcome to Le Restaurant</h1>
      <h3>We will make your culinary wish come true</h3>
      <img className="home-page-image" src={logo} />
    </div>
  );
}

export default HomePage;

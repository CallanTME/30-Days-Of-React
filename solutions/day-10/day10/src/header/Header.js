const Header = (props) => {
  return (
    <header>
      <div className="header-wrapper">
        <h1>{props.data.welcome}</h1>
        <h2>{props.data.title}</h2>
        <h3>{props.data.subtitle}</h3>
        <p>
          {props.data.firstName} {props.data.lastName}
        </p>
        <small>{props.data.date}</small>
      </div>
    </header>
  );
};

export default Header;

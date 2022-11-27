import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Tourism</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/326058/pexels-photo-326058.jpeg?cs=srgb&dl=pexels-pixabay-326058.jpg&fm=jpg"
        alt=""
      />
    </div>
  );
}

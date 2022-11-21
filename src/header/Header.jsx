import "./header.css"

export default function header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">React & node</span>
            <span className="headerTitleLg">Blog</span>

        </div>
        <img className="headerImg" src="https://media.istockphoto.com/id/1205613046/photo/top-view-of-modern-office-workspace.jpg?b=1&s=170667a&w=0&k=20&c=bWOA9d-nbIlSYT8ukXiJTAgMre8hbYjr5gKNarNbIGE=" alt="" />
    </div>
  )
}

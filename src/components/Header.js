import Button from "./Button"

const Header = ({ title }) => {
    const popUp = () => {
        alert("clicked")
    }

    return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={popUp}/>
    </header>
  )
}

Header.defaultProps = {
    title: "Task Tracker"
}

export default Header

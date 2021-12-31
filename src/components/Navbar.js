const Navbar = ({ onSetPage }) => {
  return (
    <nav>
      <button onClick={() => onSetPage("people")}> People</button>
      <button onClick={() => onSetPage("planets")}>Planets</button>
    </nav>
  )
}

export default Navbar

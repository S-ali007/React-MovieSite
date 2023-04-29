
const Header = () => {
    return (
        <div className="text-lg bg-red-200 flex justify-between p-2 ">
        <h1 className="border-blue-800  border-[2px] px-2">This is Header Component</h1>
        <nav className="border-blue-800  border-[2px] px-2">HOME</nav>
        <nav>PRICING</nav>
        <nav>ABOUT</nav>
        </div>
    );
};

export default Header;

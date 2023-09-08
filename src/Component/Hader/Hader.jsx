import { Link } from "react-router-dom";

const Hader = () => {
  return (
    <div className="navbar bg-primary text-primary-content">
      <a className="btn btn-ghost normal-case text-xl">daisyUI</a>

      <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
      <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
      <Link className="btn btn-ghost normal-case text-xl" to='/regester'>Regester</Link>
    </div>
  );
};

export default Hader;

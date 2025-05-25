
import { Link } from 'react-router-dom';
//car
const BackLink = ({ to, children }) => {
  return (
    <Link to={to}>
      {children}
    </Link>
  );
};

export default BackLink;

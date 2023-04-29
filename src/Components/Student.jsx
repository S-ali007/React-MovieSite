import Comp from "./Comp";
import propTypes from "prop-types";

const Student = (props) => {
  return (
    <div className="bg-purple-600">
      <h1>
        STUDENT Name : {props.name} <br />
        Age :{props.age}
      </h1>
      <Comp name={props.name} />
      {/* Adding the component to get the value of this components   */}
    </div>
  );
};

Student.propTypes = {
  name: propTypes.string,
  age: propTypes.number,
};

// default props
Student.defaultProps = {
  name: "",
  age: "",
};

export default Student;

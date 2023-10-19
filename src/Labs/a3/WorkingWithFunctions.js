import ArrowFunctions from "./ArrowFunctions";
import ES5Function from "./ES5Functions";
import ImpliedReturn from "./ImpliedReturn";
import FunctionParenthesisAndParameters from "./FunctionParenthesisAndParameters";

function Functions() {
    return (
        <div>
            <ES5Function />
            <ArrowFunctions/>
            <ImpliedReturn />
            <FunctionParenthesisAndParameters/>

        </div>
    );
}
export default Functions
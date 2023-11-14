function Asd({ cvb }) {
    const { asd, bnm } = useParams();
    return (
        <h2>{parseInt(asd) + parseInt(bnm) - parseInt(cvb)}</h2>
    );
}
export default Asd;

import { useParams } from "react-router";
import Asd from "./Asd";
function App() {
    return (
        <div>
            <Link to="/hgf/3/4">EWQ</Link>
            <Routes>
                <Route path="/hgf/:asd/:bnm" element={<Asd cvb={4} />} />
            </Routes>
        </div>
    );
}
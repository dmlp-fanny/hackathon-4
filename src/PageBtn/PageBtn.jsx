import { useContext } from "react";
import Context from "../Context";
import "./PageBtn.scss";

export default function PageBtn ({ label, value}) {

    const { dispatch } = useContext(Context)

    const handleClick = () => {
        dispatch({
            type: 'page/change',
            payload: value
        });
    }

    return (
        <button className="btnPagination" onClick={handleClick}>{ label }</button>
    )
}
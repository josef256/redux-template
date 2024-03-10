import Compo3 from "./Compo3.jsx";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
const Compo2 = () => {
	const total = useSelector((state) => state);
	const name = useSelector((state) => state.reducerCommentaire.name);
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch({
			type: "change",
			payload: { total: 100, name: "aziz" },
		});
	};
	useEffect(() => {
		console.log("total value", total);
	}, [total]);
	return (
		<div>
			<button onClick={handleClick}>change name: {name}</button>
			<Compo3 />
		</div>
	);
};
export default Compo2;

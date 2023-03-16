import { useNavigate } from "react-router-dom"
import { setIsFirstTimeUser } from "../redux/reducers/userSlice"
import { useDispatch } from "react-redux"

const GettingStarted = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const assignVisitor = () => {
		dispatch(setIsFirstTimeUser())
		navigate('/')
	}
	return (

		<div className="landing_pg">
			<img src={Logo} alt="Logo" style={{ maxWidth: '300px' }} />
			<button className="btn" onClick={() => assignVisitor()}><span>Enjoy Your Shopping</span> <TrendingFlatIcon /></button>
		</div>
	);
}

export default GettingStarted;
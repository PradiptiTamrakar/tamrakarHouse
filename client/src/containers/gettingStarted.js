import { useNavigate } from "react-router-dom"
import { assignUserRole, setIsFirstTimeUser } from "../redux/reducers/userSlice"
import { useDispatch } from "react-redux";
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';


const GettingStarted = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const assignVisitor = () => {
		dispatch(setIsFirstTimeUser(false))
		dispatch(assignUserRole("user"))
	}
	return (

		<div className="landing_pg">
			<img src="https://img.freepik.com/free-photo/shop-clothing-clothes-shop-hanger-modern-shop-boutique_1150-8886.jpg?w=996&t=st=1679286235~exp=1679286835~hmac=09ba180eaa099bd222f3463dc3a2821d64bbaf1e2b87b26691853ead4b76a295" alt="Logo" style={{ maxWidth: '300px' }} />
			<button className="btn" onClick={() => assignVisitor()}><span>Enjoy your shopping with Us</span> <TrendingFlatIcon /></button>
		</div>
	);
}

export default GettingStarted;
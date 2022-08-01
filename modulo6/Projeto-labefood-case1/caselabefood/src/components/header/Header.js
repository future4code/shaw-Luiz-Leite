import { ArrowBackIosNew } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"
import { gotToBack } from "../../routes/Coordnator"
import {ContainerHeader} from "../header/Styled"



const Header = ({title, back}) => {
    const navigate = useNavigate()
    
    return <ContainerHeader>
    {back && <ArrowBackIosNew onClick={() => gotToBack(navigate) }/>}
        <title>{title}</title>
    </ContainerHeader>
}

export default Header
import Header from "../../componets/Header/Header";
import { useUnprotectedPage } from "../../Hooks/UseUnprotectePage";
import SignUpForm from "./SignupForm"
import { PageContainer, SignUpPageContainer } from "./Styled"

function SignUpPage({rightButtonText, setRightButtonText}) {
    useUnprotectedPage()
    
    return (
        <PageContainer>
            <SignUpPageContainer>
                <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
                <h1>Olá, boas vindas ao LabEddit ;)</h1>
                <SignUpForm rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
            </SignUpPageContainer>
        </PageContainer>
    );
}

export default SignUpPage;
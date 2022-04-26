import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {ContainerDiv, Navbar, MainDiv, FooterDiv, IconDiv} from './styled'





export default function TelaInicial () {
    const [profileList, setProfileList] = useState({})


    useEffect(() => {
        getProfileToChoose()
    }, [])

    const getProfileToChoose = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/luiz-marcelo/person"
        axios
            .get(url)
            .then((res) => {
                console.log (res.data);
                setProfileList(res.data.profile);
            })
            .catch((err) => console.log(err.response));
    
    };
    
    

  return (
    <ContainerDiv>
            <Navbar>
                <h1>astroMatch</h1>
            </Navbar>
            <MainDiv>
               <img src={profileList.photo}/>
               Nome: {profileList.name}
               bio: {profileList.bio}
               idade:{profileList.age}
            </MainDiv>
            <FooterDiv>
            
                <IconDiv>
                    <button>S2</button>
                </IconDiv>
                <IconDiv>
                    <button>S2</button>
                </IconDiv>
                <IconDiv>
                   <button>X</button>
                </IconDiv>
            </FooterDiv>
        </ContainerDiv>

)
}










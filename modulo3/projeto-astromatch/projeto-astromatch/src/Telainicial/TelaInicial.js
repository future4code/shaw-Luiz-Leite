import React,{useEffect,useState} from 'react'
import axios from 'axios'



const TelaInicial = (props) => {
    const [profile, setProfile] = useState({})


    useEffect(() => {
        getProfileToChoose(props.profile)
    }, [props.profile])

    const getProfileToChoose = () => {
        axios
            .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/luiz-marcelo/person")
            .then((res) => setProfile(res.data.profile))
            .catch((err) => console.log(err))
    
    }
    
    const choosePerson = (choices) => {
        const body = {
            id: profile.id,
            choice: choices
        }
        axios
            .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/luiz-marcelo/matches", body)
            .then((res) => { getProfileToChoose()
                if (res.data.isMatch === true) {
                   ({
                        title: 'Vocês deram Match!',
                    })
                }
              })
          .catch((err) => console.log(err))
  }

  return (
    <div>
        <div>
            <a><img src={Logo} /></a>
            <img src={AstromatchLogo} />
            <a onClick={() => props.changePages()}><img src={Chat} /></a>
            
        </div>
        <div>
            {(profile && Object.keys(profile).length !== 0) && profiles()}
        </div>
        <div>
            <div>
                <a onClick={() => choosePerson(false)} ><img src={Cross} /></a>
            </div>
            <div>
                <a><img src={Star} /></a>
            </div>
            <div>
                <a onClick={() => choosePerson(true)} ><img src={Heart} /></a>
            </div>
        </div>
    </div>

)
}

export default TelaInicial

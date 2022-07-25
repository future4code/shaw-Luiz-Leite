export const gotToLogin = (navigate) => {
    navigate('/')
}

export const gotToFeed = (navigate) => {
    navigate('/feed')
}

export const gotToBack = (navigate) => {
    navigate(-1)
}


export const gotToRestaurant = (navigate,id) => {
    navigate(`/feed/${id}`)
}

export const gotToSingUp = (navigate) => {
    navigate('/signup')
}

export const gotToSingUpAdress = (navigate) => {
    navigate('/signup/adress')
}


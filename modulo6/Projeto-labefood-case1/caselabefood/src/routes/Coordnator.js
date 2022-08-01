export const goToLogin = (navigate) => {
    navigate('/')
}

export const goToFeed = (navigate) => {
    navigate('/feed')
}

export const goToBack = (navigate) => {
    navigate(-1)
}

export const goToRestaurant = (navigate,id) => {
    navigate(`/feed/${id}`)
}

export const goToSingUp = (navigate) => {
    navigate('/signup')
}

export const goToSingUpAdress = (navigate) => {
    navigate('/signup/adress')
}

export const goToProfileEdit = (navigate,id)=> {
    navigate(`/profile/${id}`)
}

export const goToProfile = (navigate)=> {
    navigate(`/profile`)
}

export const goToAdressEdit = (navigate,id) => {
    navigate(`/adressEdit/${id}`)
}
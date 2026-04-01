export const getFlashState = () => {
  return JSON.parse(localStorage.getItem('flashState'))
}

export const getCurrentFlashState = () => {
  return JSON.parse(localStorage.getItem('flashState')).current
}

export const rightFlash = (flashId) => {

}
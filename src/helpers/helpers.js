export const getRandNumber = (lowerLimit, higherLimit) => {
    return Math.floor((Math.random() * higherLimit - lowerLimit + 1) + lowerLimit)
}

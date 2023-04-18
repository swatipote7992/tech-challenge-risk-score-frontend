import calculateRiskScore from "./src/calculateRiskScore"


// replace below hash with input
const transactionHash = 'c490b06b3fe9ea6626b2aa955f5e98f58152875637405f8ebe58879602c72457'

const riskScore = calculateRiskScore(transactionHash)

console.log(riskScore)



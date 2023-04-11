import contributions from '../data/contributions'

const calculateRiskScore = (transactionHash): number => {
    const transactionData = contributions[transactionHash]

    if (!transactionData) {
        throw new Error('404 transaction not found')
    }

    return Math.random() * 10
}

export default calculateRiskScore;
export const useStrong = (password: string) => {
    const calculateStrength = (password: string) => {
        // Define os critérios de pontuação
        const criteria = {
            length: password.length >= 9,
            uppercase: /[A-Z]/.test(password),
            lowercase: /[a-z]/.test(password),
            numbers: /\d/.test(password),
            specialChars: /[!@#$%^&*()_+]/.test(password),
        }

        // Calcule a pontuação
        const score = Object.values(criteria).filter(Boolean).length

        return score
    }

    const strength = calculateStrength(password)
    const getStrengthLabel = () => {
        if (strength === 1) return "Fraca"
        if (strength === 2) return "Média"
        if (strength === 3) return "Forte"
        return "Muito Forte"
    }

    return { getStrengthLabel }
}

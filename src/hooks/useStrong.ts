export const useStrong = (password: string) => {
    const calculateStrength = (password: string) => {
        // Define os critérios de pontuação
        const criteria = {
            length: password.length >= 8,
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
        if (strength === 0) return "Fraca"
        if (strength === 1) return "Média"
        if (strength === 2) return "Forte"
        return "Muito Forte"
    }

    const getStrengthColor = () => {
        if (strength === 0) return "red"
        if (strength === 1) return "orange"
        if (strength === 2) return "green"
        return "blue"
    }

    return { getStrengthColor, getStrengthLabel }
}

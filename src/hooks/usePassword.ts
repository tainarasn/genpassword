export const usePassword = (
    length: number,
    useUpper: boolean,
    useLower: boolean,
    useNumber: boolean,
    useSymbol: boolean
) => {
    let charset = ""
    if (useUpper) {
        charset = charset + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if (useLower) {
        charset = charset + "abcdefghijklmnopqrstuvwxyz"
    }
    if (useNumber) {
        charset = charset + "0123456789"
    }
    if (useSymbol) {
        charset = charset + "!@#$%^&*()_+"
    }

    if (charset === "") {
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    }

    let password = ""
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length)
        password += charset[randomIndex]
    }
    console.log(password)
    return password
}

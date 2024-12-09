export function validateLoginForm(email, password) {
    if (!email || !password) {
        return { status: "false", mssg: "Fill all the Fields" };
    }
    const emailValid = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email);

    const passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if (!emailValid) return { status: "false", mssg: "Invalid email" };
    if (!passwordValid) return { status: "false", mssg: "Invalid password" };
    return { status: "true", mssg: null };

}
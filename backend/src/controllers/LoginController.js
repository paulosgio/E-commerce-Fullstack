import { loginService } from "../services/userService.js";

export async function Login(req, res) {
    const credentials = await loginService(req.body)
    return res.status(200).json(credentials)
}
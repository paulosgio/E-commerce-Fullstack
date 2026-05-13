import { registerService } from "../services/userService.js";

export async function Register(req, res) {
    const credentialSafe = await registerService(req.body)
    return res.status(201).json(credentialSafe)
}
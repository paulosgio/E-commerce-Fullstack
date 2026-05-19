import { meService } from "../services/userService.js";

export async function Me(req, res) {
    const me = await meService(req.user._id)
    return res.status(200).json(me)
}
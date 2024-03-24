import catchAsync from '../utils/catchAsync.js'

export const calculate = catchAsync(async (req, res, next) => {
    let sum_nxP = 0,
        sum_nxPxK = 0,
        sum_nxPxP = 0,
        sum_nxPxKxtg = 0,
        U
    const result = { Is: {} }

    Object.keys(req.body).forEach((key) => {
        const EP = req.body[key]
        if (!U) U = EP.U
        sum_nxP += EP.n * EP.P
        sum_nxPxK += EP.n * EP.P * EP.K
        sum_nxPxP += EP.n * EP.P * EP.P
        sum_nxPxKxtg += EP.n * EP.P * EP.K * EP.tg
        result.Is[key] = (EP.n * EP.P) / (Math.sqrt(3) * EP.U * EP.cos * EP.kkd)
    })

    result.Ku = sum_nxPxK / sum_nxP
    result.n = (sum_nxP * sum_nxP) / sum_nxPxP
    result.Kp = 1.25
    result.P = sum_nxPxK * result.Kp
    result.Q =
        result.n > 10
            ? sum_nxPxKxtg * result.Kp
            : sum_nxPxKxtg * 1.1 * result.Kp
    result.S = Math.sqrt(result.P * result.P + result.Q * result.Q)
    result.I = result.P / U

    res.status(200).json({ status: 'success', data: result })
})

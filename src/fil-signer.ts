import init from '../pkg/filecoin-signer'
import * as signer from '../pkg/filecoin-signer'

var inited  = false

export default async function fileCoinSigner() {
    if (!inited) {
        await init()
        inited = true
    }
    return signer
}
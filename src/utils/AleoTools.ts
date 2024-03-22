import {Address, PrivateKey, Signature, ViewKey} from '@aleohq/wasm'
import {AleoAccount} from "../model";
import StringUtils from './StringUtils';

const AleoTools = {
    /**
     * 创建一个aleo的新账户  返回一个数据对象 
     * @constructor
     */
    createAccount() {
        let account = new PrivateKey();
        return {
            privateKey: account.to_string(),
            viewKey: account.to_view_key().to_string(),
            address: account.to_address().to_string()
        } as AleoAccount
    },
    /**
     * 根绝私钥查询账户
     * @param privateKey
     */
    loadAccount(privateKey: string) {
        let account = PrivateKey.from_string(privateKey)
        if (privateKey != null) {
            return {
                privateKey: account.to_string(),
                viewKey: account.to_view_key().to_string(),
                address: account.to_address().to_string()
            } as AleoAccount
        }
        return null

    },
    /**
     * 解析Output的Value数据
     * @param recordData
     * @param viewKey
     */
    decryptRecord(recordData: string, viewKey: string) {
        try {
            console.log(viewKey,recordData);
            let req = ViewKey.from_string(viewKey).decrypt(recordData)
            return req
        } catch (e) {
            return ""
        }
    },

    /**
     * 对消息进行签名
     * @param privateKey 钱包私钥
     * @param message 消息
     */
    signMessage(privateKey: string, message: string) {
        let signingAccount = PrivateKey.from_string(privateKey)
        if (signingAccount && message) {
            return signingAccount.sign(StringUtils.stringToUint8Array(message)).to_string()
        }
        return ""
    },
    /**
     * 消息验证
     * @param address
     * @param message
     * @param signature
     */
    verifyMessage(address: string, message: string,signature:string) {
        try {
            if (address && message && signature){
                let messageBytes = StringUtils.stringToUint8Array(message);
                let signatureString = Signature.from_string(signature)
                let addressCount = Address.from_string(address)
                return addressCount.verify(messageBytes,signatureString);
            }
            return false;
        }catch (e) {
            return false;
        }

    }

}
export default AleoTools
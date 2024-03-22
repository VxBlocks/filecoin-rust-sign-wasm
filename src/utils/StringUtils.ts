let reg = /^[0-9]+.?[0-9]*$/;
/**
 * 字符串处理工具
 */
const StringUtils = {
    stringToUint8Array(str: string) {
        let arr = [] as any[];
        for (let i = 0, l = str.length; i < l; i++) {
            let hex = Number(str.charCodeAt(i)).toString(16);
            arr.push(hex);
        }
        return new Uint8Array(arr);
    },
}
export default StringUtils
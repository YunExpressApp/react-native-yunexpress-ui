/*
 * @Author: 1418220302@qq.com 1418220302@qq.com
 * @Date: 2022-10-20 16:16:04
 * @LastEditors: 1418220302@qq.com 1418220302@qq.com
 * @LastEditTime: 2022-10-20 16:35:49
 * @FilePath: \yunExpresse:\git\react-native-yunexpress-ui\src\components\modal\type.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export type ActionSheetProps = {
    onClose?: Function,
    callback?: Function,
    index?: number | null,
    data?: string[],
    cancelText?: string
}

export type ActionSheetItem = {
    name: string,
    value: string
}

export type ActionSheetStatus = {
    visible: boolean,
    data: Array<ActionSheetItem>,
    index: number,
    onItemClick?: ((item: ActionSheetItem, index: number) => void) | null
}

export type ActionSheetRef = {
    open: (data: Array<ActionSheetItem>, index: number, onItemClick?: ((item: ActionSheetItem, index: number) => void) | null) => void
}

import { sendGTMEvent } from "@next/third-parties/google";
import { extractArrayOfObject, extractProperties, extractPurchaseArrayOfObject } from "./googleAnalytics";

export const tagManagerEvent = (eventName, value, items, itemType) => {
    let dataItems;
    if (itemType === "item_type_array") {
        dataItems = extractArrayOfObject(items)
    } else {
        dataItems = extractProperties(items)
    }
    sendGTMEvent({
        event: eventName,
        currency: "BDT",
        value: value,
        items: dataItems
    })
}

export const purchaseTagManagerEventForPurchase = (eventName, customerDataInfo, items) => {
    const { order_no, customer_name, address, phone , value} = customerDataInfo;
    sendGTMEvent({
        event: eventName,
        transaction_id: order_no,
        currency: "BDT",
        customerName: customer_name,
        customerShippingAddress: address,
        customerShippingPhone: phone,
        value: value,
        items: extractPurchaseArrayOfObject(items)
    })
}

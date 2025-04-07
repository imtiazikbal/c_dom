export const OrderSummary = ({
  checkDeliveryCharge,
  cart,
  handleChange,
  domainInfo,
  cartSubTotal,
  totalItem,
  isCheckedInSideDhaka,
  isCheckedInOutSideDhaka,
  isCheckedSubArea,
  shippingCost,
}) => {
  return (
    <>
      <div className="product_part">
        <ul>
          <li className="d_flex">
            <h3>Order Summary</h3>
          </li>
          <li className="d_flex">
            <h5>Subtotal</h5>
            <p>
              {" "}
              ৳{" "}
              {Number(cartSubTotal)
                ?.toFixed(0)
                ?.replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 0}
            </p>
          </li>
          <li className="d_flex">
            <h5>Total Item</h5>
            <p>{totalItem}</p>
          </li>
          <li className="d_flex">
            <h5>Shipping</h5>
            {checkDeliveryCharge.outside_dhaka > 0 && cart?.length !== 0 ? (
              <div style={{ width: "60%", textAlign: "right" }}>
                <div>
                  <input
                    style={{ width: "8%" }}
                    type="checkbox"
                    value={checkDeliveryCharge?.inside_dhaka}
                    onChange={handleChange}
                    id="insideDhaka"
                    checked={isCheckedInSideDhaka}
                  />
                  {domainInfo?.default_delivery_location
                    ? `Inside 
                              ${domainInfo?.default_delivery_location}`
                    : "Inside Dhaka"}{" "}
                  ৳
                  <span style={{ fontWeight: "bold" }}>
                    {" "}
                    {checkDeliveryCharge?.inside_dhaka}
                  </span>
                </div>

                <div>
                  <input
                    style={{ width: "8%" }}
                    type="checkbox"
                    value={checkDeliveryCharge?.outside_dhaka}
                    onChange={handleChange}
                    id="outSideDhaka"
                    checked={isCheckedInOutSideDhaka}
                  />
                  {domainInfo?.default_delivery_location
                    ? `Outside 
                              ${domainInfo?.default_delivery_location}`
                    : "Outside Dhaka"}{" "}
                  ৳{" "}
                  <span style={{ fontWeight: "bold" }}>
                    {checkDeliveryCharge.outside_dhaka}
                  </span>
                </div>

                {checkDeliveryCharge?.sub_area_charge > 0 && (
                  <div>
                    <input
                      style={{ width: "8%" }}
                      type="checkbox"
                      value={checkDeliveryCharge?.sub_area_charge}
                      onChange={handleChange}
                      id="subArea"
                      checked={isCheckedSubArea}
                    />
                    Sub Area ৳
                    <span style={{ fontWeight: "bold" }}>
                      {checkDeliveryCharge?.sub_area_charge}
                    </span>
                  </div>
                )}
              </div>
            ) : (
              <p> {cart?.length === 0 ? "0" : "Free"}</p>
            )}
          </li>
          <li className="d_flex">
            <h3>Total</h3>
            <h4>
              TK{" "}
              {cart?.length < 1
                ? 0
                : (parseInt(cartSubTotal) + parseInt(shippingCost))
                    ?.toFixed(0)
                    ?.replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 0}
            </h4>
          </li>
        </ul>
      </div>
    </>
  );
};

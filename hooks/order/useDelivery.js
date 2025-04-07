import { useState, useEffect } from 'react';

export const useDelivery = (shippingSettings, cart) => {
  const [selectedLocation, setSelectedLocation] = useState("outside_dhaka");
  const [deliveryCharges, setDeliveryCharges] = useState({
    inside_dhaka: 0,
    outside_dhaka: 0,
    sub_area_charge: 0,
  });
  const [shippingCost, setShippingCost] = useState();

  const handleLocationChange = (location, cost) => {
    setSelectedLocation(location);
    setShippingCost(cost);
  };

  useEffect(() => {
    let inside = 0, outside = 0, subArea = 0;
    if (shippingSettings?.status === 1) {
      setDeliveryCharges({
        inside_dhaka: shippingSettings?.inside,
        outside_dhaka: shippingSettings?.outside,
        sub_area_charge: shippingSettings?.subarea,
      });
    } else {
      for (const item of cart) {
        inside += item['inside_dhaka'];
        outside += item['outside_dhaka'];
        subArea += item['sub_area_charge'];
      }
      setDeliveryCharges({
        inside_dhaka: inside,
        outside_dhaka: outside,
        sub_area_charge: subArea,
      });
    }
  }, [shippingSettings, cart]);

  useEffect(() => {
    setShippingCost(deliveryCharges?.outside_dhaka);
  }, [deliveryCharges]);

  return {
    selectedLocation,
    deliveryCharges,
    shippingCost,
    handleLocationChange,
  };
};

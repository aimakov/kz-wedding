import { Flex, Text } from "@chakra-ui/react";
import { IoCopyOutline } from "react-icons/io5";

import { useToast } from "@/hooks";

const GoogleMap = () => {
  const { successToast } = useToast();

  return (
    <Flex justifyContent="center" alignItems={"center"} gap={6} flexDirection={"column"} py={10}>
      <Text fontSize={24}>Где находится ресторан</Text>
      <Flex gap={5} alignItems={"center"} width={"full"} px={6}>
        <Text>Салтанат Сарайы - Дворец бракосочетания, Проспект Абулхайр-хана, 77 </Text>
        <IoCopyOutline
          cursor={"pointer"}
          style={{ scale: "-1 1", marginBottom: "4px", width: "20px" }}
          onClick={() => {
            navigator.clipboard.writeText("г. Атырау, Проспект Абулхайр-хана, 77");
            successToast({
              title: "Адрес скопирован!",
              description: "",
            });
          }}
        />
      </Flex>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2715.5982915564655!2d51.86587197689217!3d47.10694522234676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41a3e9747c3e9ae1%3A0xc0543232911e82a8!2zU2FsdGFuYXQgU2FyYXlpLCDQlNCy0L7RgNC10YYg0JHRgNCw0LrQvtGB0L7Rh9C10YLQsNC90LjRjyDQuCDQotC-0LnRhdCw0L3QsCDQodCw0LvRgtCw0L3QsNGCINCh0LDRgNCw0Lk!5e0!3m2!1sen!2skr!4v1706633499535!5m2!1sen!2skr&style=element:geometry%7Ccolor:0x212121&style=element:labels.icon%7Cvisibility:off&style=element:labels.text.fill%7Ccolor:0x757575&style=element:labels.text.stroke%7Ccolor:0x212121&style=feature:administrative%7Celement:geometry%7Ccolor:0x757575&style=feature:administrative.country%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:administrative.land_parcel%7Cvisibility:off&style=feature:administrative.locality%7Celement:labels.text.fill%7Ccolor:0xbdbdbd&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:poi.park%7Celement:geometry%7Ccolor:0x181818&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:poi.park%7Celement:labels.text.stroke%7Ccolor:0x1b1b1b&style=feature:road%7Celement:geometry.fill%7Ccolor:0x2c2c2c&style=feature:road%7Celement:labels.text.fill%7Ccolor:0x8a8a8a&style=feature:road.arterial%7Celement:geometry%7Ccolor:0x373737&style=feature:road.highway%7Celement:geometry%7Ccolor:0x3c3c3c&style=feature:road.highway.controlled_access%7Celement:geometry%7Ccolor:0x4e4e4e&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:transit%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:water%7Celement:geometry%7Ccolor:0x000000&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x3d3d3d&size=480x360"
        style={{ width: "90%", maxWidth: "400px", height: "400px" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Flex>
  );
};

export default GoogleMap;

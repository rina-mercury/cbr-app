import { Buffer } from "buffer";
import iconv from "iconv-lite";
import { parseString } from "react-native-xml2js";

export const parseXml = (res) => {
  const result = iconv.decode(Buffer.from(res.data), "utf-8");
  const updatedAt = new Date().toJSON();
  let parsed;
  parseString(result, (err, data) => {
    parsed = data.ValCurs.Valute.map((element) => {
      const charCode = element.CharCode[0];
      const name = element.Name[0];
      const nominal = Number(element.Nominal[0]);
      const value = Number(
        element.Value[0].match(",")
          ? element.Value[0].replace(",", ".")
          : element.Value[0]
      );
      return {
        name,
        charCode,
        nominal,
        updatedAt,
        value,
      };
    });
  });
  return parsed;
};

export const mergedArrays = (BusData1, OtherData2) => {
  BusData1.forEach((business) => {
    OtherData2.forEach((other) => {
      business.enName = other.name;
    });
  });
  return BusData1;
};

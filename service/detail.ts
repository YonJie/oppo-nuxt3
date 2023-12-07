import ApiRequest from "./index";
import type { ResultType } from "./index";
import type { IProductDetail } from "~/store/home";

export type IDetailProductType = "oppo" | "air" | "watch" | "tablet";
export interface IDetailInfo {
  id?: number;
  title?: string;
  productDetailss?: IProductDetail[];
}

export const getDetailInfo = (type: IDetailProductType) => {
  return ApiRequest.get<ResultType<IDetailInfo>>("/oppoDetail", {
    type,
  });
};

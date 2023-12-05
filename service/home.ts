import type { IHomeState } from "~/store/home";
import ApiRequest from "./index";
import type { ResultType } from "./index";
export type HomeInfoType = "oppo" | "onePlus" | "intelligent"; // oppo、onePlus、intelligent

export const getHomeInfo = (type: HomeInfoType) => {
  return ApiRequest.get<ResultType<IHomeState>>("/home/info", {
    type: type || "oppo",
  });
};

import { get, post, put, del } from "../utils/request";

/**
 * 获取房源信息
 * @returns
 */
export const loadHousesAPI = () => get("/api/v1/house_rooms");

/**
 * 根据id获取房源详情
 * @param id
 * @returns
 */
export const loadHouseByIdAPI = (id: string) =>
  get("/api/v1/house_rooms/" + id);

/**
 * 获取聊天列表的用户
 * @returns
 */
export const loadMsgUsersAPI = () => get("/api/v1/members/messages");

/**
 * 获取和指定用户的聊天信息
 * @param userId
 * @returns
 */
export const loadCurrentUserMessagesAPI = (llId: string) =>
  get("/api/v1/members/messages/" + llId);

/**
 * 合同信息
 * @returns
 */
export const loadContractAPI = () => get("/api/v1/members/view_contract");

/**
 * 确认合同
 * @param id
 * @returns
 */
export const checkContractAPI = (id: string) =>
  post("/api/v1/members/check_contract", {
    contractId: id,
  });

/**
 * 获取当前合同的支付信息
 * @param id
 * @returns
 */
export const loadContractOrders = (id: string) =>
  get("/api/v1/members/contract_orders/" + id);

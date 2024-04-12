import MESSAGE from '../helper/message';
import { sendErrorResponse, sendSuccessResponse } from '../utils/responder';
import { createEntity, deleteEntityById, getAllEntity, getEntityById, updateEntity } from '../services/commonServices';
import Policy from '../models/PolicySchema';

export const PolicyController = {
    createPolicy: async (req: any, res: any) => {
        try {
            const data = req.body;
            const entity = await createEntity(Policy, data);
            sendSuccessResponse(res, MESSAGE.OK, MESSAGE.POLICY_ADDED, entity);
        } catch (error) {
            sendErrorResponse(error, res);
        }
    },

    getAllPolicies: async (req: any, res: any) => {
        try {
            const policies = await getAllEntity(Policy);
            sendSuccessResponse(res, MESSAGE.OK, MESSAGE.FETCH_DATA_SUCCESSFULLY, policies);
        } catch (error) {
            sendErrorResponse(error, res);
        }
    },

    getPolicyById: async (req: any, res: any) => {
        try {
            const { id } = req.params;
            const policy = await getEntityById(Policy, id, MESSAGE.POLICY_NOTFOUND);
            sendSuccessResponse(res, MESSAGE.OK, MESSAGE.FETCH_DATA_SUCCESSFULLY, policy);
        } catch (error) {
            sendErrorResponse(error, res);
        }
    },

    updatePolicyById: async (req: any, res: any) => {
        try {
            const { policyId } = req.params;
            const data = req.body;
            const updatedBlog = await updateEntity(Policy, policyId, data, MESSAGE.POLICY_NOTFOUND)
            sendSuccessResponse(res, MESSAGE.OK, MESSAGE.POLICY_UPDATED, updatedBlog);

        } catch (error) {
            sendErrorResponse(error, res);
        }
    },

    deletePolicyById: async (req: any, res: any) => {
        try {
            const { policyId } = req.params;
            await deleteEntityById(Policy, policyId, MESSAGE.POLICY_NOTFOUND);
            sendSuccessResponse(res, MESSAGE.OK, MESSAGE.POLICY_DELETED);
        } catch (error) {
            sendErrorResponse(error, res);
        }
    }
};

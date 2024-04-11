import { policyService } from '../services/PolicyService';
import MESSAGE from '../helper/message';
import { sendErrorResponse, sendSuccessResponse } from '../utils/responder';
import { createEntity } from '../helper/commonServices';
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
            const policies = await policyService.getPolicies();
            res.send(policies);
        } catch (error) {
            sendErrorResponse(error, res);
        }
    },

    getPolicyById: async (req: any, res: any) => {
        const _id = req.params.id;

        try {
            const policy = await policyService.getPolicyById(_id);

            if (!policy) {
                throw { status: 404, message: MESSAGE.POLICY_NOTFOUND };
            }

            res.send(policy);
        } catch (error) {
            sendErrorResponse(error, res);
        }
    },

    updatePolicyById: async (req: any, res: any) => {
        try {
            const policyId = req.params.id;
            const updates = req.body;
            const policy = await policyService.updatePolicyById(policyId, updates);

            if (!policy) {
                throw { status: 404, message: MESSAGE.POLICY_NOTFOUND };
            }

            res.send(policy);
        } catch (error) {
            sendErrorResponse(error, res);
        }
    },

    deletePolicyById: async (req: any, res: any) => {
        try {
            const { policyId } = req.params;
            const policy = await policyService.deletePolicyById(policyId);
            if (!policy) {
                return res.status(404).json({ error: MESSAGE.POLICY_NOTFOUND });
            }
            sendSuccessResponse(res, MESSAGE.OK, MESSAGE.POLICY_DELETED);
        } catch (error) {
            sendErrorResponse(error, res);
        }
    }
};

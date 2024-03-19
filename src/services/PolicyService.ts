import Policy from '../models/PolicySchema';

export const policyService = {
    createPolicy: async (policyData: any) => {
        const policy = new Policy(policyData);
        return await policy.save();
    },

    getPolicies: async () => {
        return await Policy.find();
    },

    getPolicyById: async (policyId: string) => {
        return await Policy.findById(policyId);
    },

    updatePolicyById: async (policyId: string, updates: any) => {
        const allowedUpdates = ['policyName', 'description', 'coverage', 'premium', 'tripCancellationCoverage', 'emergencyMedicalCoverage', 'baggageCoverage', 'tripStartDate', 'tripEndDate'];
        const isValidOperation = Object.keys(updates).every(update => allowedUpdates.includes(update));

        if (!isValidOperation) {
            throw { status: 400, message: 'Invalid updates!' };
        }

        return await Policy.findByIdAndUpdate(policyId, updates, { new: true, runValidators: true });
    },

    deletePolicyById: async (policyId: string) => {
        return await Policy.findByIdAndDelete(policyId);
    }
};

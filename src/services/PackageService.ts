import Package from '../models/PackageSchema';

export const packageService = {
    createPackage: async (name: string, description: string, destination: string, days: number, price: number) => {
        const packageData = new Package({ name, description, destination, days, price });
        return await packageData.save();
    },

    getPackages: async () => {
        return await Package.find();
    },

    updatePackage: async (tripPackageId: string, name: string, description: string, destination: string, days: number, price: number) => {
        return await Package.findByIdAndUpdate(tripPackageId, { name, description, destination, days, price }, { new: true });
    },

    deletePackage: async (tripPackageId: string) => {
        return await Package.findByIdAndDelete(tripPackageId);
    }
};

import Rental from '../models/RentalSchema';

export const rentalService = {
    getAllRentals: async () => {
        return await Rental.find();
    },

    getRentalById: async (rentalId: string) => {
        return await Rental.findById(rentalId);
    },

    createRental: async (name: string, description: string, location: string, pricePerDay: number) => {
        if (!name || !description || !location || !pricePerDay) {
            throw { status: 400, message: 'Invalid rental data!' };
        }

        const newRental = new Rental({ name, description, location, pricePerDay });
        return await newRental.save();
    },

    updateRental: async (rentalId: string, name: string, description: string, location: string, pricePerDay: number) => {
        if (!name || !description || !location || !pricePerDay) {
            throw { status: 400, message: 'Invalid rental data!' };
        }

        return await Rental.findByIdAndUpdate(
            rentalId,
            { name, description, location, pricePerDay },
            { new: true }
        );
    },

    deleteRental: async (rentalId: string) => {
        return await Rental.findByIdAndDelete(rentalId);
    }
};

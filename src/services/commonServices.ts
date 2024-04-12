export const createEntity = async (Model: any, data: any) => {
    try {
        const entity = await Model.create(data);
        return entity;
    } catch (error) {
        throw error;
    }
};

export const getEntityById = async (Model: any, id: string, errorMessage: string) => {
    try {
        const entry = await Model.findById(id);
        if (!entry) {
            throw { status: 404, message: errorMessage };
        }
        return entry;
    } catch (error) {
        throw error;
    }
};

export const deleteEntityById = async (Model: any, id: string, notFoundMessage: string) => {
    try {
        const entity = await Model.findById(id)
        if (!entity) {
            throw { status: 404, message: notFoundMessage };
        }
        const deletedEntity = await entity.remove();
        return deletedEntity;
    } catch (error) {
        throw error;
    }
};

export const updateEntity = async (Model: any, id: string, updateData: any, notFoundMessage: string) => {
    try {
        const existingEntity = await Model.findById(id);
        if (!existingEntity) {
            throw { status: 404, message: notFoundMessage };
        }
        // Update the existing entity with the provided data
        existingEntity.set(updateData);

        const updatedData = await existingEntity.save();
        return updatedData;
    } catch (error) {
        throw error;
    }
};

export const getAllEntity = async (Model: any,condition: any = {}) => {
    try {
        const entry = await Model.find(condition);
        return entry;
    } catch (error) {
        throw error;
    }
};
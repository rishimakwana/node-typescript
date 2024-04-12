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

export const getAllEntity = async (Model: any, condition: any = {}, paginationOptions: any = {}) => {
    try {
        const { searchTerm = '', page = 1, pageSize = 10, orderBy = 'created', orderType = 'desc' } = paginationOptions;
        const skip = (page - 1) * pageSize;
        const query = Model.find(condition)
            .skip(skip)
            .limit(pageSize)
            .sort({ [orderBy]: orderType === 'asc' ? 1 : -1 });

        const entries = await query.exec();
        return entries;
    } catch (error) {
        throw error;
    }
};

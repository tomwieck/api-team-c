import { Settings  } from "../models/settings";

export const saveSettings = async (settings: any) => {
    await Settings.destroy({where:{}});
    await Settings.create({settings: JSON.stringify(settings)});
};

export const getSettings = async () => { 
    const found = await Settings.findOne({where: {}});
    return found ? JSON.parse((found.dataValues.settings)): null;
};

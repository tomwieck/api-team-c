import { Settings } from "../models/settings";


export const saveSettings = async (settings: any) => {

    if ((await Settings.findOne({ where: { username: settings.username.toString() } })) !== null)
        await Settings.destroy({ where: { username: settings.username.toString() } });

    await Settings.create({ username: settings.username.toString(), settings: JSON.stringify(settings) });

};

export const getSettings = async (username: string) => {
    const found = await Settings.findOne({ where: { username } });
    return (found !== null) ? await JSON.parse(found.dataValues.settings) : null;
};

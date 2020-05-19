export const getLocationInfosByName = async (name) => {
    try {
        const { Value: sites } = await chayns.findSite(name);

        if (sites) {
            return sites.map(({ siteId, locationId, appstoreName }) => ({
                siteId,
                locationId,
                name: appstoreName,
            }));
        }
    } catch (err) {
        console.warn('Could not load location infos by name');
    }

    return null;
};

export const getLocationInfosByLocationId = async (locationId) => {
    try {
        const response = await fetch(`https://chaynssvc.tobit.com/v0.5/${locationId}/LocationSettings/Raw?fields=LocationName,SiteId`);

        if (response.status === 200) {
            const data = await response.json();

            const {
                siteId,
                locationName,
            } = data;

            return [{
                siteId,
                locationId,
                name: locationName,
            }];
        }
    } catch (err) {
        console.warn('Could not load location infos by locationId');
    }

    return null;
};

export const getLocationInfosBySiteId = async (siteId) => {
    try {
        const response = await fetch(`https://chaynssvc.tobit.com/redirect/v0.5/${siteId}/locationSettings/Raw?fields=LocationName,LocationId`);

        if (response.status === 200) {
            const data = await response.json();

            const {
                locationId,
                locationName,
            } = data;

            return [{
                siteId,
                locationId,
                name: locationName,
            }];
        }
    } catch (err) {
        console.warn('Could not load location infos by siteId');
    }

    return null;
};

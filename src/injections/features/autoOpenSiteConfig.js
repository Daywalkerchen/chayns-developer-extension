export default () => {
    const openAndLockSiteConfig = () => {
        if (chayns.env.user.groups.some((group) => group.id === 1)) {
            const tappGroups = document.querySelectorAll('.cw-group');

            if (tappGroups) {
                const adminGroup = Array.from(tappGroups)
                    .find((block) => block.innerText.includes(chayns.env.site.title));

                if (adminGroup) {
                    const accordion = adminGroup.children[0];

                    if (accordion) {
                        const accordionHead = accordion.children[0];

                        if (accordionHead) {
                            accordionHead.click();
                            accordionHead.style.setProperty('pointer-events', 'none');
                        }
                    }
                }
            }
        }
    };

    openAndLockSiteConfig();

    chayns.addAccessTokenChangeListener(openAndLockSiteConfig);
};

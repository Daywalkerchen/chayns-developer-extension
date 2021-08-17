# Chayns Developer Tools # 

Chrome Extension which adds several utility and debug tools to the chayns®Web.

## Feature-List ##

You can enable/disable every feature individually through the small gear in the dock.

#### General ####

| Feature       | Description |
|---------------|-------------|
| Click-To-Copy | All data-elements can be clicked to directly copy it's content to your clipboard. |
| Live-Update   | All data-elements are updating live when the environment changes. |

#### Modules ####

A module is an element shown in the dock. The dock can be expanded by clicking the icon of the extension.

| Feature     | Description |
|-------------|-------------|
| User-Info   | Displays data about the currently logged in user. |
| Site-Info   | Displays data about both site and currently selected tapp. |
| Shop-Info   | Scans the current tapp for a microshop and displays information about the branch. |
| Finder      | An input to resolve a user using either an userId, a personId or the name. |

#### Mutations ####

These features directly modify the webpage. They occur once, after the initial page load.

| Feature     | Description |
|-------------|-------------|
| Site-Mute | Automatically mute the background sound of chayns-Sites. |
| Pause background video | Automatically pause the background video of chayns-Sites. This can greatly improve performance. |
| Remove mobile info | Removes the content-card when the site is using the emulated mobile-view. This will center the phone on the screen. |
| Attach TappIds | Adds a small badge to each tapp-navigation-item including the tappId. Clicking the badge will copy the Id. |
| Auto open site config | Automatically open the site's configuration |

## Installation ##

The newest version is internally available under `Q:\LFester\chaynsDev`.  
You may also download the latest version from the `Release-Tab` of this repository.  
Proceed with step `5-9` when using this version.

To use the extension, you need to build the project:

1. Clone the project 
2. Run `npm install`
   - If you are unable to install the packages due to make sure, that python2 and MSBuildTools are installed.
   - You may need to install the windows build tools: `npm install --global --production windows-build-tools --vs2015`
   - You may also need to manually configure your `VCTargetsPath` environment variable to match you installation. <br> For VS2017: `C:\Program Files (x86)\Microsoft Visual Studio\2017\BuildTools\Common7\IDE\VC\VCTargets` 
3. Run `npm run build`
4. Copy the build folder to a desired location.
5. Go to `chrome://extensions`
6. Activate developer-mode (top-right)
7. Select 'Load packed extension' (top-left)
8. Select the folder with the build extension.
9. Restart chrome

__DO NOT DELETE THE FOLDER INCLUDING THE EXTENSION AFTER LOADING IT__

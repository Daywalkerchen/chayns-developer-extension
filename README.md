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
| Lorem-Ipsum | A data element containing a 100-word-version of 'Lorem Ipsum' for quick access |
| Finder      | An input to resolve a user using either an userId, a personId or the name. |

#### Mutations ####

These features directly modify the webpage. They occur once, after the initial page load.

| Feature     | Description |
|-------------|-------------|
| Site-Mute | Automatically mute the background sound of chayns-Sites. |
| Remove background video | Automatically remove the background video of chayns-Sites. This can greatly improve performance. |
| Attach TappIds | Adds a small badge to each tapp-navigation-item including the tappId. Clicking the badge will copy the Id. |
| Elevate Tapps-Tapp | Moves the tapp to manage other tapps directly to the root of the administration container for quicker access. |

## Installation ##

The extension is not yet available in the chrome webstore. To use the extension, you need to build the project:

1. Clone the project 
2. Run `npm install`
3. Run `npm run build`
4. Copy the build folder to a desired location.
5. Go to `chrome://extensions`
6. Activate developer-mode (top-right)
7. Select 'Load packed extension' (top-left)
8. Select the folder with the build extension.
9. Restart chrome

__DO NOT DELETE THE FOLDER INCLUDING THE EXTENSION AFTER LOADING IT__

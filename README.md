# Run the project
1.npm install
2. npm run android
3.npm run ios

Expo Build
1.npm install -g eas-cli
2.eas login
3.eas build:configure
4.eas build --platform android
5.eas build --platform ios

Completed Task:
1.created product List using APIs of english and arabic version
2.Based on the language toggle selection on top right corner fetch the data from backend and showed in UI using i18 locale manager
3.Used I18nManager.forceRTL(true) for changing right to left in the arabic version
4.Used fiction-expo-restart package for force restart after changing arabic version & english version on app (only production mode restart will work)
5.Added nice animation in cart icons and Add to bag button using react-native-reanimated props
6.All the styles are seperated and import the components wherever it needed
7.Themes are used inside navigationContainer.
8.Flatlist rendering initial 8 products and when it scroll it will show on more producs & Loader added using skeleton loading package and handled well
9.properly handled application optimization.


Submission:
1.Github link of the application shared
2.Demo video recording shared
3.screenshot of the application shared

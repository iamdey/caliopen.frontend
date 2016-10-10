# Caliopen frontend

This subtree is meant for building and serving CaliOpen frontend.

* serving html, js and static files
* build web application
* build desktop applications

## Installation

```
npm install
```

## USAGE for development purposes

**For web**

```
npm start
```

**For desktop**

```
npm run start:desktop
```

Open console with `ctrl+maj+I`.  
There's no HMR, so old school `ctrl+R` to see changes.

**For smartphone**

There're requirements to build and run a cordova app, follow installation instructions from [cordova website](https://cordova.apache.org/docs/en/latest/guide/cli/index.html#install-pre-requisites-for-building).

For android, when `npm run cordova requirements` is ok and if you have [AVD and a working emulated
android](https://developer.android.com/studio/run/managing-avds.html), you may want to launch the stack:

```
npm run start:smartphone
```

_(Other platforms are not yet supported)_

The app is launched every time you change a file. If you prefer control when the app is reloaded,
launch the following commands:

```
npm run build:smartphone:dev
npm run cordova emulate android --debug
```

### Troubleshoutings

**Android SDK Build-tools**

The following error may appears when running emulation:

```
Exception in thread "main" java.lang.UnsupportedClassVersionError: com/android/dx/command/Main : Unsupported major.minor version 52.0
```

It sounds like "Android SDK Build-tools" (v24.0.3) fails with cordova, ionic, ...  
With Android SDK Manager, downgrade to v23.0.3 and remove the latest one.

## Release (production)

```
npm run release
```

## Web server (production)

```
npm run start:prod
```

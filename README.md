# Space Station SMM Settings Generator

This repo contains the static single-page webapp for generating `settings*.json` files for the Space Station simulation.

The app generates valid .json settings files for both the client and server based on the classes defined in the respective `GameSettingsManager.cs` files.
The relevant classes that define the structure of these configuration files are tagged `[System.Serializable]` with the naming convention `GameSettings*`.

Within this repo, the fields are defined in the `src/fields.ts` Typescript file and their corresponding types are located in `src/global.d.ts`.
The `src/index.ts` file needs to be updated to include new settings in either the `SpaceStationClientSettings` and `SpaceStationClientSettings` interfaces and added to the individual `generate*` functions that create the settings objects.

Server settings and client setting should be downloaded together to ensure sync between the client and server and matching `id` attributes.

# Demo

Accessible in-lab only: 

### [http://192.168.0.171](http://192.168.0.171)
# Expo Constants.deviceId Inconsistency on Android

This repository demonstrates a bug related to Expo's `Constants.deviceId` function on Android.  The `deviceId` often returns `null` or inconsistent values, making it unreliable for applications that need a unique identifier for each device. 

## Problem

The `Constants.deviceId` in Expo is intended to provide a unique identifier for each device. However, on some Android devices and emulators, it returns `null` or generates different values inconsistently. This can break features relying on a persistent unique ID.

## Solution

The provided solution demonstrates a robust approach to handle inconsistent `deviceId` values by using a combination of SecureStore for persistent storage and generating a UUID if a valid `deviceId` is unavailable. 

## How to Reproduce

1. Clone this repository.
2. Run the `bug.js` file within an Expo environment.
3. Observe the inconsistent or `null` results for `Constants.deviceId` on various Android emulators and devices.
4. Then run `bugSolution.js` to see the solution in action.

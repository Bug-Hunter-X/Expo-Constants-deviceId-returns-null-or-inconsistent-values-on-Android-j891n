This improved code uses AsyncStorage (or SecureStore for enhanced security) to store a unique identifier. It checks for an existing identifier. If none exists, it generates one using UUID, and then persists it. If `Constants.deviceId` provides a valid value, it prioritizes using that. This approach ensures a consistent, unique identifier across sessions and devices, handling cases where `Constants.deviceId` is unreliable.

```javascript
import * as Constants from 'expo-constants';
import * as SecureStore from 'expo-secure-store'; // Enhanced security
import { v4 as uuidv4 } from 'uuid';

async function getOrCreateUniqueId() {
  let uniqueId = await SecureStore.getItemAsync('uniqueId');
  if (uniqueId) {
    console.log('Using existing unique ID:', uniqueId);
    return uniqueId; 
  }

  const deviceId = Constants.deviceId;
  if (deviceId && deviceId !== null) {
    uniqueId = deviceId;
  } else {
    uniqueId = uuidv4();
  }

  await SecureStore.setItemAsync('uniqueId', uniqueId);
  console.log('Generated/Retrieved unique ID:', uniqueId);
  return uniqueId;
}

getOrCreateUniqueId();
```
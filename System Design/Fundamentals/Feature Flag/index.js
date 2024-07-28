/**
 * Feature Flag in Software Development
 *
 * A feature flag (or feature toggle) is a technique used in software development
 * to enable or disable features at runtime, without deploying new code. This allows
 * developers to control the availability of features dynamically.
 *
 * Why Are Feature Flags Useful?
 *
 * 1. **Gradual Rollout**:
 *    - Feature flags allow new features to be released gradually to a subset of users.
 *      This helps in testing the feature's stability and user reception before a wider rollout.
 *
 * 2. **A/B Testing**:
 *    - They facilitate A/B testing by enabling different versions of a feature to be tested
 *      with different user groups. This is crucial for optimizing user experience based on data.
 *
 * 3. **Safe Deployment**:
 *    - Feature flags provide a quick way to disable a feature if it causes issues in production.
 *      This helps in minimizing disruptions and allows for swift response without rolling back the entire deployment.
 *
 * 4. **Continuous Delivery**:
 *    - They support continuous integration and delivery by allowing incomplete or experimental
 *      features to be merged into the main codebase, but disabled until they are ready to be launched.
 *
 * 5. **User Segmentation**:
 *    - Features can be enabled or disabled for specific groups of users, such as beta testers, premium users,
 *      or users in certain regions, allowing for targeted feature releases and experiments.
 *
 * 
 * 
 * Example:- AWS config
 * 
 * Example:
 */

// Feature flag configuration
const featureFlags = {
    newFeatureEnabled: false // This flag controls the availability of the new feature
  };
  
  // Function demonstrating the use of a feature flag
  function displayFeature() {
    if (featureFlags.newFeatureEnabled) {
      console.log("New feature is enabled!");
      // Code for the new feature
    } else {
      console.log("New feature is disabled.");
      // Code for the existing feature or alternative behavior
    }
  }
  
  // Usage
  displayFeature();
  
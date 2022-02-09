# AR Driving Car

Adapted from original code from here: 
https://github.com/viromedia/viro/tree/master/js/ARDrivingCarDemo

## Notes:

- React Native w/ Android doesn't support multi-touch across multiple buttons, so you can only accelerate, decelerate or turn the steering wheel individually. (The experience works better on iOS)

- Has a yellow console warning:
Warning: Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state.
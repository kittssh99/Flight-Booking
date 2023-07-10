const useThrottling = () => {
  const throttle = (callbackFn, delay) => {
    let wait = false;

    return (...args) => {
      if (wait) {
        return;
      }
      callbackFn(...args);
      wait = true;
      setTimeout(() => {
        wait = false;
      }, delay);
    };
  };

  return {throttle};
};

export default useThrottling;

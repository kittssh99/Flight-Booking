const useFilter = () => {
  let lowToHighFilter = data => {
    return data && [...data].sort((a, b) => a.fare - b.fare);
  };

  let highToLowFilter = data => {
    return data && [...data].sort((a, b) => b.fare - a.fare);
  };

  return {lowToHighFilter, highToLowFilter};
};

export default useFilter;

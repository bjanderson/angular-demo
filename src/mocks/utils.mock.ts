export function callsSpy(spy, calledWith) {
  if (calledWith?.length > 0) {
    expect(spy).toHaveBeenCalledWith(...calledWith);
  } else {
    expect(spy).toHaveBeenCalled();
  }
}

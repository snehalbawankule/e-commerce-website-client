const handleScroll = (e: any, isLoading: any, pageNo: any, setPageNo: any) => {
  const target = e.target as HTMLElement;
  const bottom =
    target.scrollHeight - target.scrollTop - target.clientHeight < 50;
  if (bottom && !isLoading) {
    const nextPage = pageNo + 1;
    setPageNo(nextPage);
  }
};

export default handleScroll;

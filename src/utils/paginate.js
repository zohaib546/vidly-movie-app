export const paginate = (items, pageSize, pageNo) => {
	const startIndex = (pageNo - 1) * pageSize;
	const endIndex = startIndex + pageSize;
	
	const newItems = items.slice(startIndex, endIndex);
	return newItems;
};

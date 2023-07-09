import React, { useEffect, useState } from "react";

const useDebounce = (value: unknown, delay = 700) => {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const id = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		() => clearTimeout(id);
	}, [value, delay]);

	return debouncedValue;
};

export default useDebounce;

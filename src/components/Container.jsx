import React from "react";

const Container = ({ children }) => {
	return (
		<div className="flex items-center justify-center h-screen p-4 bg-gray-100 ">
			<div className="w-full max-w-4xl">{children}</div>
		</div>
	);
};
export default Container;
